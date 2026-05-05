"use client";

import { useEffect } from "react";
import { defaultLocale, isLocale, languages, type Locale, translateText } from "@/lib/i18n";

const storageKey = "raian-language";
const originalText = new WeakMap<Text, string>();
const translatedAttribute = "data-raian-original";
const ignoredTags = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "SVG", "TEXTAREA"]);
const translatedAttributes = ["aria-label", "title", "alt", "placeholder"];

const getStoredLocale = (): Locale => {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  const storedLocale = window.localStorage.getItem(storageKey);

  return isLocale(storedLocale) ? storedLocale : defaultLocale;
};

const translateNode = (node: Node, locale: Locale) => {
  if (node.nodeType === Node.TEXT_NODE) {
    const textNode = node as Text;
    const currentText = textNode.nodeValue ?? "";
    const storedText = originalText.get(textNode);
    const isKnownTranslatedText = storedText
      ? languages.some((language) => translateText(storedText, language.code).trim() === currentText.trim())
      : false;
    const sourceText = storedText && (currentText === storedText || isKnownTranslatedText) ? storedText : currentText;

    originalText.set(textNode, sourceText);

    textNode.nodeValue = translateText(sourceText, locale);
    return;
  }

  if (!(node instanceof Element) || ignoredTags.has(node.tagName)) {
    return;
  }

  translatedAttributes.forEach((attributeName) => {
    const sourceAttribute = node.getAttribute(`${translatedAttribute}-${attributeName}`) ?? node.getAttribute(attributeName);

    if (!sourceAttribute) {
      return;
    }

    if (!node.hasAttribute(`${translatedAttribute}-${attributeName}`)) {
      node.setAttribute(`${translatedAttribute}-${attributeName}`, sourceAttribute);
    }

    node.setAttribute(attributeName, translateText(sourceAttribute, locale));
  });

  node.childNodes.forEach((childNode) => translateNode(childNode, locale));
};

const applyLocale = (locale: Locale) => {
  document.documentElement.lang = locale;
  translateNode(document.body, locale);
};

export function AutoTranslator() {
  useEffect(() => {
    let currentLocale = getStoredLocale();
    let isApplying = false;

    const runTranslation = () => {
      isApplying = true;
      applyLocale(currentLocale);
      window.requestAnimationFrame(() => {
        isApplying = false;
      });
    };

    const handleLanguageChange = (event: Event) => {
      const nextLocale = (event as CustomEvent<Locale>).detail;

      if (!isLocale(nextLocale)) {
        return;
      }

      currentLocale = nextLocale;
      runTranslation();
    };

    const observer = new MutationObserver((mutations) => {
      if (isApplying) {
        return;
      }

      const shouldTranslate = mutations.some((mutation) => mutation.addedNodes.length > 0 || mutation.type === "characterData");

      if (shouldTranslate) {
        runTranslation();
      }
    });

    window.addEventListener("raian-language-change", handleLanguageChange);
    runTranslation();
    observer.observe(document.body, {
      childList: true,
      characterData: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("raian-language-change", handleLanguageChange);
    };
  }, []);

  return null;
}
