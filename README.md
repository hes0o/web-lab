{
  "lighthouseVersion": "13.0.1",
  "requestedUrl": "http://localhost:5173/",
  "mainDocumentUrl": "http://localhost:5173/",
  "finalDisplayedUrl": "http://localhost:5173/",
  "finalUrl": "http://localhost:5173/",
  "fetchTime": "2026-02-24T17:30:18.508Z",
  "gatherMode": "navigation",
  "runWarnings": [],
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
  "environment": {
    "networkUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
    "hostUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
    "benchmarkIndex": 4336,
    "credits": {
      "axe-core": "4.11.0"
    }
  },
  "audits": {
    "accesskeys": {
      "id": "accesskeys",
      "title": "`[accesskey]` values are unique",
      "description": "Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique. [Learn more about access keys](https://dequeuniversity.com/rules/axe/4.11/accesskeys).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-allowed-attr": {
      "id": "aria-allowed-attr",
      "title": "`[aria-*]` attributes match their roles",
      "description": "Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes. [Learn how to match ARIA attributes to their roles](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "aria-allowed-role": {
      "id": "aria-allowed-role",
      "title": "Uses ARIA roles only on compatible elements",
      "description": "Many HTML elements can only be assigned certain ARIA roles. Using ARIA roles where they are not allowed can interfere with the accessibility of the web page. [Learn more about ARIA roles](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-command-name": {
      "id": "aria-command-name",
      "title": "`button`, `link`, and `menuitem` elements have accessible names",
      "description": "When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to make command elements more accessible](https://dequeuniversity.com/rules/axe/4.11/aria-command-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-conditional-attr": {
      "id": "aria-conditional-attr",
      "title": "ARIA attributes are used as specified for the element's role",
      "description": "Some ARIA attributes are only allowed on an element under certain conditions. [Learn more about conditional ARIA attributes](https://dequeuniversity.com/rules/axe/4.11/aria-conditional-attr).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "aria-deprecated-role": {
      "id": "aria-deprecated-role",
      "title": "Deprecated ARIA roles were not used",
      "description": "Deprecated ARIA roles may not be processed correctly by assistive technology. [Learn more about deprecated ARIA roles](https://dequeuniversity.com/rules/axe/4.11/aria-deprecated-role).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "aria-dialog-name": {
      "id": "aria-dialog-name",
      "title": "Elements with `role=\"dialog\"` or `role=\"alertdialog\"` have accessible names.",
      "description": "ARIA dialog elements without accessible names may prevent screen readers users from discerning the purpose of these elements. [Learn how to make ARIA dialog elements more accessible](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-hidden-body": {
      "id": "aria-hidden-body",
      "title": "`[aria-hidden=\"true\"]` is not present on the document `<body>`",
      "description": "Assistive technologies, like screen readers, work inconsistently when `aria-hidden=\"true\"` is set on the document `<body>`. [Learn how `aria-hidden` affects the document body](https://dequeuniversity.com/rules/axe/4.11/aria-hidden-body).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "aria-hidden-focus": {
      "id": "aria-hidden-focus",
      "title": "`[aria-hidden=\"true\"]` elements do not contain focusable descendents",
      "description": "Focusable descendents within an `[aria-hidden=\"true\"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers. [Learn how `aria-hidden` affects focusable elements](https://dequeuniversity.com/rules/axe/4.11/aria-hidden-focus).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-input-field-name": {
      "id": "aria-input-field-name",
      "title": "ARIA input fields have accessible names",
      "description": "When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about input field labels](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-meter-name": {
      "id": "aria-meter-name",
      "title": "ARIA `meter` elements have accessible names",
      "description": "When a meter element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `meter` elements](https://dequeuniversity.com/rules/axe/4.11/aria-meter-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-progressbar-name": {
      "id": "aria-progressbar-name",
      "title": "ARIA `progressbar` elements have accessible names",
      "description": "When a `progressbar` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to label `progressbar` elements](https://dequeuniversity.com/rules/axe/4.11/aria-progressbar-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-prohibited-attr": {
      "id": "aria-prohibited-attr",
      "title": "Elements use only permitted ARIA attributes",
      "description": "Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies. [Learn more about prohibited ARIA roles](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "aria-required-attr": {
      "id": "aria-required-attr",
      "title": "`[role]`s have all required `[aria-*]` attributes",
      "description": "Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more about roles and required attributes](https://dequeuniversity.com/rules/axe/4.11/aria-required-attr).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "aria-required-children": {
      "id": "aria-required-children",
      "title": "Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children.",
      "description": "Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more about roles and required children elements](https://dequeuniversity.com/rules/axe/4.11/aria-required-children).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-required-parent": {
      "id": "aria-required-parent",
      "title": "`[role]`s are contained by their required parent element",
      "description": "Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more about ARIA roles and required parent element](https://dequeuniversity.com/rules/axe/4.11/aria-required-parent).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-roles": {
      "id": "aria-roles",
      "title": "`[role]` values are valid",
      "description": "ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more about valid ARIA roles](https://dequeuniversity.com/rules/axe/4.11/aria-roles).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "aria-text": {
      "id": "aria-text",
      "title": "Elements with the `role=text` attribute do not have focusable descendents.",
      "description": "Adding `role=text` around a text node split by markup enables VoiceOver to treat it as one phrase, but the element's focusable descendents will not be announced. [Learn more about the `role=text` attribute](https://dequeuniversity.com/rules/axe/4.11/aria-text).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-toggle-field-name": {
      "id": "aria-toggle-field-name",
      "title": "ARIA toggle fields have accessible names",
      "description": "When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about toggle fields](https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-tooltip-name": {
      "id": "aria-tooltip-name",
      "title": "ARIA `tooltip` elements have accessible names",
      "description": "When a tooltip element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `tooltip` elements](https://dequeuniversity.com/rules/axe/4.11/aria-tooltip-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-treeitem-name": {
      "id": "aria-treeitem-name",
      "title": "ARIA `treeitem` elements have accessible names",
      "description": "When a `treeitem` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about labeling `treeitem` elements](https://dequeuniversity.com/rules/axe/4.11/aria-treeitem-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-valid-attr-value": {
      "id": "aria-valid-attr-value",
      "title": "`[aria-*]` attributes have valid values",
      "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values. [Learn more about valid values for ARIA attributes](https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "aria-valid-attr": {
      "id": "aria-valid-attr",
      "title": "`[aria-*]` attributes are valid and not misspelled",
      "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more about valid ARIA attributes](https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "button-name": {
      "id": "button-name",
      "title": "Buttons have an accessible name",
      "description": "When a button doesn't have an accessible name, screen readers announce it as \"button\", making it unusable for users who rely on screen readers. [Learn how to make buttons more accessible](https://dequeuniversity.com/rules/axe/4.11/button-name).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "bypass": {
      "id": "bypass",
      "title": "The page contains a heading, skip link, or landmark region",
      "description": "Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more about bypass blocks](https://dequeuniversity.com/rules/axe/4.11/bypass).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "color-contrast": {
      "id": "color-contrast",
      "title": "Background and foreground colors have a sufficient contrast ratio",
      "description": "Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "definition-list": {
      "id": "definition-list",
      "title": "`<dl>`'s contain only properly-ordered `<dt>` and `<dd>` groups, `<script>`, `<template>` or `<div>` elements.",
      "description": "When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.11/definition-list).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "dlitem": {
      "id": "dlitem",
      "title": "Definition list items are wrapped in `<dl>` elements",
      "description": "Definition list items (`<dt>` and `<dd>`) must be wrapped in a parent `<dl>` element to ensure that screen readers can properly announce them. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.11/dlitem).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "document-title": {
      "id": "document-title",
      "title": "Document has a `<title>` element",
      "description": "The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more about document titles](https://dequeuniversity.com/rules/axe/4.11/document-title).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "duplicate-id-aria": {
      "id": "duplicate-id-aria",
      "title": "ARIA IDs are unique",
      "description": "The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn how to fix duplicate ARIA IDs](https://dequeuniversity.com/rules/axe/4.11/duplicate-id-aria).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "empty-heading": {
      "id": "empty-heading",
      "title": "All heading elements contain content.",
      "description": "A heading with no content or inaccessible text prevent screen reader users from accessing information on the page's structure. [Learn more about headings](https://dequeuniversity.com/rules/axe/4.11/empty-heading).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "form-field-multiple-labels": {
      "id": "form-field-multiple-labels",
      "title": "No form fields have multiple labels",
      "description": "Form fields with multiple labels can be confusingly announced by assistive technologies like screen readers which use either the first, the last, or all of the labels. [Learn how to use form labels](https://dequeuniversity.com/rules/axe/4.11/form-field-multiple-labels).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "frame-title": {
      "id": "frame-title",
      "title": "`<frame>` or `<iframe>` elements have a title",
      "description": "Screen reader users rely on frame titles to describe the contents of frames. [Learn more about frame titles](https://dequeuniversity.com/rules/axe/4.11/frame-title).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "heading-order": {
      "id": "heading-order",
      "title": "Heading elements appear in a sequentially-descending order",
      "description": "Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more about heading order](https://dequeuniversity.com/rules/axe/4.11/heading-order).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "html-has-lang": {
      "id": "html-has-lang",
      "title": "`<html>` element has a `[lang]` attribute",
      "description": "If a page doesn't specify a `lang` attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.11/html-has-lang).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "html-lang-valid": {
      "id": "html-lang-valid",
      "title": "`<html>` element has a valid value for its `[lang]` attribute",
      "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.11/html-lang-valid).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "html-xml-lang-mismatch": {
      "id": "html-xml-lang-mismatch",
      "title": "`<html>` element has an `[xml:lang]` attribute with the same base language as the `[lang]` attribute.",
      "description": "If the webpage does not specify a consistent language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.11/html-xml-lang-mismatch).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "identical-links-same-purpose": {
      "id": "identical-links-same-purpose",
      "title": "Identical links have the same purpose.",
      "description": "Links with the same destination should have the same description, to help users understand the link's purpose and decide whether to follow it. [Learn more about identical links](https://dequeuniversity.com/rules/axe/4.11/identical-links-same-purpose).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "image-alt": {
      "id": "image-alt",
      "title": "Image elements have `[alt]` attributes",
      "description": "Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.11/image-alt).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "image-redundant-alt": {
      "id": "image-redundant-alt",
      "title": "Image elements do not have `[alt]` attributes that are redundant text.",
      "description": "Informative elements should aim for short, descriptive alternative text. Alternative text that is exactly the same as the text adjacent to the link or image is potentially confusing for screen reader users, because the text will be read twice. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "input-button-name": {
      "id": "input-button-name",
      "title": "Input buttons have discernible text.",
      "description": "Adding discernable and accessible text to input buttons may help screen reader users understand the purpose of the input button. [Learn more about input buttons](https://dequeuniversity.com/rules/axe/4.11/input-button-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "input-image-alt": {
      "id": "input-image-alt",
      "title": "`<input type=\"image\">` elements have `[alt]` text",
      "description": "When an image is being used as an `<input>` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn about input image alt text](https://dequeuniversity.com/rules/axe/4.11/input-image-alt).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "label-content-name-mismatch": {
      "id": "label-content-name-mismatch",
      "title": "Elements with visible text labels have matching accessible names.",
      "description": "Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users. [Learn more about accessible names](https://dequeuniversity.com/rules/axe/4.11/label-content-name-mismatch).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "label": {
      "id": "label",
      "title": "Form elements have associated labels",
      "description": "Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more about form element labels](https://dequeuniversity.com/rules/axe/4.11/label).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "landmark-one-main": {
      "id": "landmark-one-main",
      "title": "Document has a main landmark.",
      "description": "One main landmark helps screen reader users navigate a web page. [Learn more about landmarks](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "link-name": {
      "id": "link-name",
      "title": "Links have a discernible name",
      "description": "Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn how to make links accessible](https://dequeuniversity.com/rules/axe/4.11/link-name).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "link-in-text-block": {
      "id": "link-in-text-block",
      "title": "Links are distinguishable without relying on color.",
      "description": "Low-contrast text is difficult or impossible for many users to read. Link text that is discernible improves the experience for users with low vision. [Learn how to make links distinguishable](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "list": {
      "id": "list",
      "title": "Lists contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).",
      "description": "Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.11/list).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "listitem": {
      "id": "listitem",
      "title": "List items (`<li>`) are contained within `<ul>`, `<ol>` or `<menu>` parent elements",
      "description": "Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.11/listitem).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "meta-refresh": {
      "id": "meta-refresh",
      "title": "The document does not use `<meta http-equiv=\"refresh\">`",
      "description": "Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more about the refresh meta tag](https://dequeuniversity.com/rules/axe/4.11/meta-refresh).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "meta-viewport": {
      "id": "meta-viewport",
      "title": "`[user-scalable=\"no\"]` is not used in the `<meta name=\"viewport\">` element and the `[maximum-scale]` attribute is not less than 5.",
      "description": "Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more about the viewport meta tag](https://dequeuniversity.com/rules/axe/4.11/meta-viewport).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "object-alt": {
      "id": "object-alt",
      "title": "`<object>` elements have alternate text",
      "description": "Screen readers cannot translate non-text content. Adding alternate text to `<object>` elements helps screen readers convey meaning to users. [Learn more about alt text for `object` elements](https://dequeuniversity.com/rules/axe/4.11/object-alt).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "select-name": {
      "id": "select-name",
      "title": "Select elements have associated label elements.",
      "description": "Form elements without effective labels can create frustrating experiences for screen reader users. [Learn more about the `select` element](https://dequeuniversity.com/rules/axe/4.11/select-name).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "skip-link": {
      "id": "skip-link",
      "title": "Skip links are focusable.",
      "description": "Including a skip link can help users skip to the main content to save time. [Learn more about skip links](https://dequeuniversity.com/rules/axe/4.11/skip-link).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "tabindex": {
      "id": "tabindex",
      "title": "No element has a `[tabindex]` value greater than 0",
      "description": "A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more about the `tabindex` attribute](https://dequeuniversity.com/rules/axe/4.11/tabindex).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "table-duplicate-name": {
      "id": "table-duplicate-name",
      "title": "Tables have different content in the summary attribute and `<caption>`.",
      "description": "The summary attribute should describe the table structure, while `<caption>` should have the onscreen title. Accurate table mark-up helps users of screen readers. [Learn more about summary and caption](https://dequeuniversity.com/rules/axe/4.11/table-duplicate-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "table-fake-caption": {
      "id": "table-fake-caption",
      "title": "Tables use `<caption>` instead of cells with the `[colspan]` attribute to indicate a caption.",
      "description": "Screen readers have features to make navigating tables easier. Ensuring that tables use the actual caption element instead of cells with the `[colspan]` attribute may improve the experience for screen reader users. [Learn more about captions](https://dequeuniversity.com/rules/axe/4.11/table-fake-caption).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "target-size": {
      "id": "target-size",
      "title": "Touch targets have sufficient size and spacing.",
      "description": "Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets. [Learn more about touch targets](https://dequeuniversity.com/rules/axe/4.11/target-size).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "td-has-header": {
      "id": "td-has-header",
      "title": "`<td>` elements in a large `<table>` have one or more table headers.",
      "description": "Screen readers have features to make navigating tables easier. Ensuring that `<td>` elements in a large table (3 or more cells in width and height) have an associated table header may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.11/td-has-header).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "td-headers-attr": {
      "id": "td-headers-attr",
      "title": "Cells in a `<table>` element that use the `[headers]` attribute refer to table cells within the same table.",
      "description": "Screen readers have features to make navigating tables easier. Ensuring `<td>` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users. [Learn more about the `headers` attribute](https://dequeuniversity.com/rules/axe/4.11/td-headers-attr).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "th-has-data-cells": {
      "id": "th-has-data-cells",
      "title": "`<th>` elements and elements with `[role=\"columnheader\"/\"rowheader\"]` have data cells they describe.",
      "description": "Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.11/th-has-data-cells).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "valid-lang": {
      "id": "valid-lang",
      "title": "`[lang]` attributes have a valid value",
      "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.11/valid-lang).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "video-caption": {
      "id": "video-caption",
      "title": "`<video>` elements contain a `<track>` element with `[kind=\"captions\"]`",
      "description": "When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more about video captions](https://dequeuniversity.com/rules/axe/4.11/video-caption).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "custom-controls-labels": {
      "id": "custom-controls-labels",
      "title": "Custom controls have associated labels",
      "description": "Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more about custom controls and labels](https://developer.chrome.com/docs/lighthouse/accessibility/custom-controls-labels/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "custom-controls-roles": {
      "id": "custom-controls-roles",
      "title": "Custom controls have ARIA roles",
      "description": "Custom interactive controls have appropriate ARIA roles. [Learn how to add roles to custom controls](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "focus-traps": {
      "id": "focus-traps",
      "title": "User focus is not accidentally trapped in a region",
      "description": "A user can tab into and out of any control or region without accidentally trapping their focus. [Learn how to avoid focus traps](https://developer.chrome.com/docs/lighthouse/accessibility/focus-traps/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "focusable-controls": {
      "id": "focusable-controls",
      "title": "Interactive controls are keyboard focusable",
      "description": "Custom interactive controls are keyboard focusable and display a focus indicator. [Learn how to make custom controls focusable](https://developer.chrome.com/docs/lighthouse/accessibility/focusable-controls/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "interactive-element-affordance": {
      "id": "interactive-element-affordance",
      "title": "Interactive elements indicate their purpose and state",
      "description": "Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn how to decorate interactive elements with affordance hints](https://developer.chrome.com/docs/lighthouse/accessibility/interactive-element-affordance/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "logical-tab-order": {
      "id": "logical-tab-order",
      "title": "The page has a logical tab order",
      "description": "Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more about logical tab ordering](https://developer.chrome.com/docs/lighthouse/accessibility/logical-tab-order/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "managed-focus": {
      "id": "managed-focus",
      "title": "The user's focus is directed to new content added to the page",
      "description": "If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn how to direct focus to new content](https://developer.chrome.com/docs/lighthouse/accessibility/managed-focus/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "offscreen-content-hidden": {
      "id": "offscreen-content-hidden",
      "title": "Offscreen content is hidden from assistive technology",
      "description": "Offscreen content is hidden with display: none or aria-hidden=true. [Learn how to properly hide offscreen content](https://developer.chrome.com/docs/lighthouse/accessibility/offscreen-content-hidden/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "use-landmarks": {
      "id": "use-landmarks",
      "title": "HTML5 landmark elements are used to improve navigation",
      "description": "Landmark elements (`<main>`, `<nav>`, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more about landmark elements](https://developer.chrome.com/docs/lighthouse/accessibility/use-landmarks/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "visual-order-follows-dom": {
      "id": "visual-order-follows-dom",
      "title": "Visual order on the page follows DOM order",
      "description": "DOM order matches the visual order, improving navigation for assistive technology. [Learn more about DOM and visual ordering](https://developer.chrome.com/docs/lighthouse/accessibility/visual-order-follows-dom/).",
      "score": null,
      "scoreDisplayMode": "manual"
    }
  },
  "configSettings": {
    "output": "json",
    "maxWaitForFcp": 30000,
    "maxWaitForLoad": 45000,
    "pauseAfterFcpMs": 1000,
    "pauseAfterLoadMs": 1000,
    "networkQuietThresholdMs": 1000,
    "cpuQuietThresholdMs": 1000,
    "formFactor": "desktop",
    "throttling": {
      "rttMs": 40,
      "throughputKbps": 10240,
      "requestLatencyMs": 0,
      "downloadThroughputKbps": 0,
      "uploadThroughputKbps": 0,
      "cpuSlowdownMultiplier": 1
    },
    "throttlingMethod": "simulate",
    "screenEmulation": {
      "mobile": true,
      "width": 412,
      "height": 823,
      "deviceScaleFactor": 1.75,
      "disabled": true
    },
    "emulatedUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "auditMode": false,
    "gatherMode": false,
    "clearStorageTypes": [
      "file_systems",
      "shader_cache",
      "service_workers",
      "cache_storage"
    ],
    "disableStorageReset": false,
    "debugNavigation": false,
    "channel": "devtools",
    "usePassiveGathering": false,
    "disableFullPageScreenshot": false,
    "skipAboutBlank": false,
    "blankPage": "about:blank",
    "ignoreStatusCode": true,
    "locale": "en-US",
    "blockedUrlPatterns": null,
    "additionalTraceCategories": "",
    "extraHeaders": null,
    "precomputedLanternData": null,
    "onlyAudits": null,
    "onlyCategories": [
      "accessibility"
    ],
    "skipAudits": null
  },
  "categories": {
    "accessibility": {
      "title": "Accessibility",
      "description": "These checks highlight opportunities to [improve the accessibility of your web app](https://developer.chrome.com/docs/lighthouse/accessibility/). Automatic detection can only detect a subset of issues and does not guarantee the accessibility of your web app, so [manual testing](https://web.dev/articles/how-to-review) is also encouraged.",
      "manualDescription": "These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://web.dev/articles/how-to-review).",
      "supportedModes": [
        "navigation",
        "snapshot"
      ],
      "auditRefs": [
        {
          "id": "accesskeys",
          "weight": 0,
          "group": "a11y-navigation"
        },
        {
          "id": "aria-allowed-attr",
          "weight": 10,
          "group": "a11y-aria"
        },
        {
          "id": "aria-command-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-conditional-attr",
          "weight": 7,
          "group": "a11y-aria"
        },
        {
          "id": "aria-deprecated-role",
          "weight": 1,
          "group": "a11y-aria"
        },
        {
          "id": "aria-dialog-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-hidden-body",
          "weight": 10,
          "group": "a11y-aria"
        },
        {
          "id": "aria-hidden-focus",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-input-field-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-meter-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-progressbar-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-prohibited-attr",
          "weight": 7,
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-attr",
          "weight": 10,
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-children",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-parent",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-roles",
          "weight": 10,
          "group": "a11y-aria"
        },
        {
          "id": "aria-text",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-toggle-field-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-tooltip-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-treeitem-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-valid-attr-value",
          "weight": 10,
          "group": "a11y-aria"
        },
        {
          "id": "aria-valid-attr",
          "weight": 10,
          "group": "a11y-aria"
        },
        {
          "id": "button-name",
          "weight": 10,
          "group": "a11y-names-labels"
        },
        {
          "id": "bypass",
          "weight": 0,
          "group": "a11y-navigation"
        },
        {
          "id": "color-contrast",
          "weight": 7,
          "group": "a11y-color-contrast"
        },
        {
          "id": "definition-list",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "dlitem",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "document-title",
          "weight": 7,
          "group": "a11y-names-labels"
        },
        {
          "id": "duplicate-id-aria",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "form-field-multiple-labels",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "frame-title",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "heading-order",
          "weight": 3,
          "group": "a11y-navigation"
        },
        {
          "id": "html-has-lang",
          "weight": 7,
          "group": "a11y-language"
        },
        {
          "id": "html-lang-valid",
          "weight": 7,
          "group": "a11y-language"
        },
        {
          "id": "html-xml-lang-mismatch",
          "weight": 0,
          "group": "a11y-language"
        },
        {
          "id": "image-alt",
          "weight": 10,
          "group": "a11y-names-labels"
        },
        {
          "id": "input-button-name",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "input-image-alt",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "label",
          "weight": 10,
          "group": "a11y-names-labels"
        },
        {
          "id": "link-in-text-block",
          "weight": 0,
          "group": "a11y-color-contrast"
        },
        {
          "id": "link-name",
          "weight": 7,
          "group": "a11y-names-labels"
        },
        {
          "id": "list",
          "weight": 7,
          "group": "a11y-tables-lists"
        },
        {
          "id": "listitem",
          "weight": 7,
          "group": "a11y-tables-lists"
        },
        {
          "id": "meta-refresh",
          "weight": 0,
          "group": "a11y-best-practices"
        },
        {
          "id": "meta-viewport",
          "weight": 10,
          "group": "a11y-best-practices"
        },
        {
          "id": "object-alt",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "select-name",
          "weight": 10,
          "group": "a11y-names-labels"
        },
        {
          "id": "skip-link",
          "weight": 3,
          "group": "a11y-names-labels"
        },
        {
          "id": "tabindex",
          "weight": 0,
          "group": "a11y-navigation"
        },
        {
          "id": "target-size",
          "weight": 7,
          "group": "a11y-best-practices"
        },
        {
          "id": "td-headers-attr",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "th-has-data-cells",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "valid-lang",
          "weight": 0,
          "group": "a11y-language"
        },
        {
          "id": "video-caption",
          "weight": 0,
          "group": "a11y-audio-video"
        },
        {
          "id": "landmark-one-main",
          "weight": 3,
          "group": "a11y-best-practices"
        },
        {
          "id": "focusable-controls",
          "weight": 0
        },
        {
          "id": "interactive-element-affordance",
          "weight": 0
        },
        {
          "id": "logical-tab-order",
          "weight": 0
        },
        {
          "id": "visual-order-follows-dom",
          "weight": 0
        },
        {
          "id": "focus-traps",
          "weight": 0
        },
        {
          "id": "managed-focus",
          "weight": 0
        },
        {
          "id": "use-landmarks",
          "weight": 0
        },
        {
          "id": "offscreen-content-hidden",
          "weight": 0
        },
        {
          "id": "custom-controls-labels",
          "weight": 0
        },
        {
          "id": "custom-controls-roles",
          "weight": 0
        },
        {
          "id": "table-duplicate-name",
          "weight": 0,
          "group": "a11y-best-practices"
        },
        {
          "id": "empty-heading",
          "weight": 0,
          "group": "a11y-best-practices"
        },
        {
          "id": "aria-allowed-role",
          "weight": 0,
          "group": "a11y-best-practices"
        },
        {
          "id": "image-redundant-alt",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "identical-links-same-purpose",
          "weight": 0,
          "group": "a11y-best-practices"
        },
        {
          "id": "label-content-name-mismatch",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "table-fake-caption",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "td-has-header",
          "weight": 0,
          "group": "hidden"
        }
      ],
      "id": "accessibility",
      "score": 1
    }
  },
  "categoryGroups": {
    "metrics": {
      "title": "Metrics"
    },
    "insights": {
      "title": "Insights",
      "description": "These insights are also available in the Chrome DevTools Performance Panel - [record a trace](https://developer.chrome.com/docs/devtools/performance/reference) to view more detailed information."
    },
    "diagnostics": {
      "title": "Diagnostics",
      "description": "More information about the performance of your application. These numbers don't [directly affect](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) the Performance score."
    },
    "a11y-best-practices": {
      "title": "Best practices",
      "description": "These items highlight common accessibility best practices."
    },
    "a11y-color-contrast": {
      "title": "Contrast",
      "description": "These are opportunities to improve the legibility of your content."
    },
    "a11y-names-labels": {
      "title": "Names and labels",
      "description": "These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader."
    },
    "a11y-navigation": {
      "title": "Navigation",
      "description": "These are opportunities to improve keyboard navigation in your application."
    },
    "a11y-aria": {
      "title": "ARIA",
      "description": "These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader."
    },
    "a11y-language": {
      "title": "Internationalization and localization",
      "description": "These are opportunities to improve the interpretation of your content by users in different locales."
    },
    "a11y-audio-video": {
      "title": "Audio and video",
      "description": "These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments."
    },
    "a11y-tables-lists": {
      "title": "Tables and lists",
      "description": "These are opportunities to improve the experience of reading tabular or list data using assistive technology, like a screen reader."
    },
    "seo-mobile": {
      "title": "Mobile Friendly",
      "description": "Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn how to make pages mobile-friendly](https://developers.google.com/search/mobile-sites/)."
    },
    "seo-content": {
      "title": "Content Best Practices",
      "description": "Format your HTML in a way that enables crawlers to better understand your app’s content."
    },
    "seo-crawl": {
      "title": "Crawling and Indexing",
      "description": "To appear in search results, crawlers need access to your app."
    },
    "best-practices-trust-safety": {
      "title": "Trust and Safety"
    },
    "best-practices-ux": {
      "title": "User Experience"
    },
    "best-practices-browser-compat": {
      "title": "Browser Compatibility"
    },
    "best-practices-general": {
      "title": "General"
    },
    "hidden": {
      "title": ""
    }
  },
  "stackPacks": [],
  "entities": [
    {
      "name": "localhost",
      "origins": [
        "http://localhost:5173"
      ],
      "isFirstParty": true,
      "isUnrecognized": true
    },
    {
      "name": "dicebear.com",
      "origins": [
        "https://api.dicebear.com"
      ],
      "isUnrecognized": true
    },
    {
      "name": "placehold.co",
      "origins": [
        "https://placehold.co"
      ],
      "isUnrecognized": true
    }
  ],
  "fullPageScreenshot": {
    "screenshot": {
      "data": "data:image/webp;base64,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",
      "width": 1155,
      "height": 2199
    },
    "nodes": {
      "1-0-TEXTAREA": {
        "id": "message",
        "top": 1594,
        "bottom": 1714,
        "left": 159,
        "right": 997,
        "width": 838,
        "height": 120
      }
    }
  },
  "timing": {
    "entries": [
      {
        "startTime": 83.9,
        "name": "lh:config",
        "duration": 67.9,
        "entryType": "measure"
      },
      {
        "startTime": 84.4,
        "name": "lh:config:resolveArtifactsToDefns",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 151.9,
        "name": "lh:runner:gather",
        "duration": 5129.5,
        "entryType": "measure"
      },
      {
        "startTime": 152,
        "name": "lh:driver:connect",
        "duration": 5.9,
        "entryType": "measure"
      },
      {
        "startTime": 158.1,
        "name": "lh:driver:navigate",
        "duration": 38.1,
        "entryType": "measure"
      },
      {
        "startTime": 196.5,
        "name": "lh:gather:getBenchmarkIndex",
        "duration": 1001.7,
        "entryType": "measure"
      },
      {
        "startTime": 1198.5,
        "name": "lh:gather:getVersion",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 1198.8,
        "name": "lh:gather:getDevicePixelRatio",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 1199.7,
        "name": "lh:prepare:navigationMode",
        "duration": 17.5,
        "entryType": "measure"
      },
      {
        "startTime": 1200,
        "name": "lh:gather:getVersion",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 1205.8,
        "name": "lh:storage:clearDataForOrigin",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 1207.4,
        "name": "lh:storage:clearBrowserCaches",
        "duration": 9.3,
        "entryType": "measure"
      },
      {
        "startTime": 1216.9,
        "name": "lh:gather:prepareThrottlingAndNetwork",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 1223.7,
        "name": "lh:driver:navigate",
        "duration": 2764.8,
        "entryType": "measure"
      },
      {
        "startTime": 3991.7,
        "name": "lh:computed:NetworkRecords",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 3993.1,
        "name": "lh:gather:getArtifact:DevtoolsLog",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 3993.3,
        "name": "lh:gather:getArtifact:Accessibility",
        "duration": 117.5,
        "entryType": "measure"
      },
      {
        "startTime": 4110.9,
        "name": "lh:gather:getArtifact:NetworkUserAgent",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 4111,
        "name": "lh:gather:collectStacks",
        "duration": 4.4,
        "entryType": "measure"
      },
      {
        "startTime": 4111,
        "name": "lh:gather:getArtifact:Stacks",
        "duration": 4.4,
        "entryType": "measure"
      },
      {
        "startTime": 4115.4,
        "name": "lh:gather:getArtifact:FullPageScreenshot",
        "duration": 1164.7,
        "entryType": "measure"
      },
      {
        "startTime": 5281.5,
        "name": "lh:runner:auditing",
        "duration": 54.3,
        "entryType": "measure"
      },
      {
        "startTime": 5281.5,
        "name": "lh:runner:audit",
        "duration": 54.5,
        "entryType": "measure"
      },
      {
        "startTime": 5281.9,
        "name": "lh:audit:accesskeys",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 5282.3,
        "name": "lh:audit:aria-allowed-attr",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5283.2,
        "name": "lh:audit:aria-allowed-role",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5284.1,
        "name": "lh:audit:aria-command-name",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 5284.5,
        "name": "lh:audit:aria-conditional-attr",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5285.3,
        "name": "lh:audit:aria-deprecated-role",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 5286.1,
        "name": "lh:audit:aria-dialog-name",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 5286.5,
        "name": "lh:audit:aria-hidden-body",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5287.4,
        "name": "lh:audit:aria-hidden-focus",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 5287.7,
        "name": "lh:audit:aria-input-field-name",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 5288.3,
        "name": "lh:audit:aria-meter-name",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 5289.3,
        "name": "lh:audit:aria-progressbar-name",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 5290,
        "name": "lh:audit:aria-prohibited-attr",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5290.9,
        "name": "lh:audit:aria-required-attr",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 5291.9,
        "name": "lh:audit:aria-required-children",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 5292.2,
        "name": "lh:audit:aria-required-parent",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 5292.8,
        "name": "lh:audit:aria-roles",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 5293.6,
        "name": "lh:audit:aria-text",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 5294,
        "name": "lh:audit:aria-toggle-field-name",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 5294.6,
        "name": "lh:audit:aria-tooltip-name",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 5295.1,
        "name": "lh:audit:aria-treeitem-name",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 5295.6,
        "name": "lh:audit:aria-valid-attr-value",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5296.4,
        "name": "lh:audit:aria-valid-attr",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5297.3,
        "name": "lh:audit:button-name",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5298.2,
        "name": "lh:audit:bypass",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5299.1,
        "name": "lh:audit:color-contrast",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 5299.9,
        "name": "lh:audit:definition-list",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 5300.4,
        "name": "lh:audit:dlitem",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 5300.9,
        "name": "lh:audit:document-title",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 5301.8,
        "name": "lh:audit:duplicate-id-aria",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5302.7,
        "name": "lh:audit:empty-heading",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 5303.7,
        "name": "lh:audit:form-field-multiple-labels",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5304.5,
        "name": "lh:audit:frame-title",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 5305.3,
        "name": "lh:audit:heading-order",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 5306.3,
        "name": "lh:audit:html-has-lang",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 5307.3,
        "name": "lh:audit:html-lang-valid",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5308.1,
        "name": "lh:audit:html-xml-lang-mismatch",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 5308.8,
        "name": "lh:audit:identical-links-same-purpose",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5309.7,
        "name": "lh:audit:image-alt",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 5310.5,
        "name": "lh:audit:image-redundant-alt",
        "duration": 3.9,
        "entryType": "measure"
      },
      {
        "startTime": 5314.4,
        "name": "lh:audit:input-button-name",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 5315,
        "name": "lh:audit:input-image-alt",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 5315.7,
        "name": "lh:audit:label-content-name-mismatch",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 5316.6,
        "name": "lh:audit:label",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5317.4,
        "name": "lh:audit:landmark-one-main",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5318.3,
        "name": "lh:audit:link-name",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5319.1,
        "name": "lh:audit:link-in-text-block",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 5319.7,
        "name": "lh:audit:list",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 5320.6,
        "name": "lh:audit:listitem",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 5321.6,
        "name": "lh:audit:meta-refresh",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 5322.4,
        "name": "lh:audit:meta-viewport",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5323.3,
        "name": "lh:audit:object-alt",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 5324,
        "name": "lh:audit:select-name",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5324.9,
        "name": "lh:audit:skip-link",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 5325.7,
        "name": "lh:audit:tabindex",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 5326.3,
        "name": "lh:audit:table-duplicate-name",
        "duration": 3.8,
        "entryType": "measure"
      },
      {
        "startTime": 5330.2,
        "name": "lh:audit:table-fake-caption",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 5331,
        "name": "lh:audit:target-size",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5331.9,
        "name": "lh:audit:td-has-header",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 5332.6,
        "name": "lh:audit:td-headers-attr",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 5333.3,
        "name": "lh:audit:th-has-data-cells",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 5334.2,
        "name": "lh:audit:valid-lang",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 5334.9,
        "name": "lh:audit:video-caption",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 5335.6,
        "name": "lh:audit:custom-controls-labels",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 5335.6,
        "name": "lh:audit:custom-controls-roles",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 5335.7,
        "name": "lh:audit:focus-traps",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 5335.7,
        "name": "lh:audit:focusable-controls",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 5335.7,
        "name": "lh:audit:interactive-element-affordance",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 5335.7,
        "name": "lh:audit:logical-tab-order",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 5335.8,
        "name": "lh:audit:managed-focus",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 5335.8,
        "name": "lh:audit:offscreen-content-hidden",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 5335.8,
        "name": "lh:audit:use-landmarks",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 5335.8,
        "name": "lh:audit:visual-order-follows-dom",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 5335.8,
        "name": "lh:runner:generate",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 5336.1,
        "name": "lh:computed:EntityClassification",
        "duration": 0.4,
        "entryType": "measure"
      }
    ],
    "total": 5184
  },
  "i18n": {
    "rendererFormattedStrings": {},
    "icuMessagePaths": {
      "core/audits/accessibility/accesskeys.js | title": [
        "audits.accesskeys.title"
      ],
      "core/audits/accessibility/accesskeys.js | description": [
        "audits.accesskeys.description"
      ],
      "core/audits/accessibility/aria-allowed-attr.js | title": [
        "audits[aria-allowed-attr].title"
      ],
      "core/audits/accessibility/aria-allowed-attr.js | description": [
        "audits[aria-allowed-attr].description"
      ],
      "core/lib/i18n/i18n.js | columnFailingElem": [
        "audits[aria-allowed-attr].details.headings[0].label",
        "audits[aria-conditional-attr].details.headings[0].label",
        "audits[aria-deprecated-role].details.headings[0].label",
        "audits[aria-hidden-body].details.headings[0].label",
        "audits[aria-prohibited-attr].details.headings[0].label",
        "audits[aria-required-attr].details.headings[0].label",
        "audits[aria-roles].details.headings[0].label",
        "audits[aria-valid-attr-value].details.headings[0].label",
        "audits[aria-valid-attr].details.headings[0].label",
        "audits[button-name].details.headings[0].label",
        "audits[color-contrast].details.headings[0].label",
        "audits[document-title].details.headings[0].label",
        "audits[heading-order].details.headings[0].label",
        "audits[html-has-lang].details.headings[0].label",
        "audits[html-lang-valid].details.headings[0].label",
        "audits[image-alt].details.headings[0].label",
        "audits[label-content-name-mismatch].details.headings[0].label",
        "audits.label.details.headings[0].label",
        "audits[landmark-one-main].details.headings[0].label",
        "audits[link-name].details.headings[0].label",
        "audits.list.details.headings[0].label",
        "audits.listitem.details.headings[0].label",
        "audits[meta-viewport].details.headings[0].label",
        "audits[select-name].details.headings[0].label",
        "audits[skip-link].details.headings[0].label",
        "audits[target-size].details.headings[0].label"
      ],
      "core/audits/accessibility/aria-allowed-role.js | title": [
        "audits[aria-allowed-role].title"
      ],
      "core/audits/accessibility/aria-allowed-role.js | description": [
        "audits[aria-allowed-role].description"
      ],
      "core/audits/accessibility/aria-command-name.js | title": [
        "audits[aria-command-name].title"
      ],
      "core/audits/accessibility/aria-command-name.js | description": [
        "audits[aria-command-name].description"
      ],
      "core/audits/accessibility/aria-conditional-attr.js | title": [
        "audits[aria-conditional-attr].title"
      ],
      "core/audits/accessibility/aria-conditional-attr.js | description": [
        "audits[aria-conditional-attr].description"
      ],
      "core/audits/accessibility/aria-deprecated-role.js | title": [
        "audits[aria-deprecated-role].title"
      ],
      "core/audits/accessibility/aria-deprecated-role.js | description": [
        "audits[aria-deprecated-role].description"
      ],
      "core/audits/accessibility/aria-dialog-name.js | title": [
        "audits[aria-dialog-name].title"
      ],
      "core/audits/accessibility/aria-dialog-name.js | description": [
        "audits[aria-dialog-name].description"
      ],
      "core/audits/accessibility/aria-hidden-body.js | title": [
        "audits[aria-hidden-body].title"
      ],
      "core/audits/accessibility/aria-hidden-body.js | description": [
        "audits[aria-hidden-body].description"
      ],
      "core/audits/accessibility/aria-hidden-focus.js | title": [
        "audits[aria-hidden-focus].title"
      ],
      "core/audits/accessibility/aria-hidden-focus.js | description": [
        "audits[aria-hidden-focus].description"
      ],
      "core/audits/accessibility/aria-input-field-name.js | title": [
        "audits[aria-input-field-name].title"
      ],
      "core/audits/accessibility/aria-input-field-name.js | description": [
        "audits[aria-input-field-name].description"
      ],
      "core/audits/accessibility/aria-meter-name.js | title": [
        "audits[aria-meter-name].title"
      ],
      "core/audits/accessibility/aria-meter-name.js | description": [
        "audits[aria-meter-name].description"
      ],
      "core/audits/accessibility/aria-progressbar-name.js | title": [
        "audits[aria-progressbar-name].title"
      ],
      "core/audits/accessibility/aria-progressbar-name.js | description": [
        "audits[aria-progressbar-name].description"
      ],
      "core/audits/accessibility/aria-prohibited-attr.js | title": [
        "audits[aria-prohibited-attr].title"
      ],
      "core/audits/accessibility/aria-prohibited-attr.js | description": [
        "audits[aria-prohibited-attr].description"
      ],
      "core/audits/accessibility/aria-required-attr.js | title": [
        "audits[aria-required-attr].title"
      ],
      "core/audits/accessibility/aria-required-attr.js | description": [
        "audits[aria-required-attr].description"
      ],
      "core/audits/accessibility/aria-required-children.js | title": [
        "audits[aria-required-children].title"
      ],
      "core/audits/accessibility/aria-required-children.js | description": [
        "audits[aria-required-children].description"
      ],
      "core/audits/accessibility/aria-required-parent.js | title": [
        "audits[aria-required-parent].title"
      ],
      "core/audits/accessibility/aria-required-parent.js | description": [
        "audits[aria-required-parent].description"
      ],
      "core/audits/accessibility/aria-roles.js | title": [
        "audits[aria-roles].title"
      ],
      "core/audits/accessibility/aria-roles.js | description": [
        "audits[aria-roles].description"
      ],
      "core/audits/accessibility/aria-text.js | title": [
        "audits[aria-text].title"
      ],
      "core/audits/accessibility/aria-text.js | description": [
        "audits[aria-text].description"
      ],
      "core/audits/accessibility/aria-toggle-field-name.js | title": [
        "audits[aria-toggle-field-name].title"
      ],
      "core/audits/accessibility/aria-toggle-field-name.js | description": [
        "audits[aria-toggle-field-name].description"
      ],
      "core/audits/accessibility/aria-tooltip-name.js | title": [
        "audits[aria-tooltip-name].title"
      ],
      "core/audits/accessibility/aria-tooltip-name.js | description": [
        "audits[aria-tooltip-name].description"
      ],
      "core/audits/accessibility/aria-treeitem-name.js | title": [
        "audits[aria-treeitem-name].title"
      ],
      "core/audits/accessibility/aria-treeitem-name.js | description": [
        "audits[aria-treeitem-name].description"
      ],
      "core/audits/accessibility/aria-valid-attr-value.js | title": [
        "audits[aria-valid-attr-value].title"
      ],
      "core/audits/accessibility/aria-valid-attr-value.js | description": [
        "audits[aria-valid-attr-value].description"
      ],
      "core/audits/accessibility/aria-valid-attr.js | title": [
        "audits[aria-valid-attr].title"
      ],
      "core/audits/accessibility/aria-valid-attr.js | description": [
        "audits[aria-valid-attr].description"
      ],
      "core/audits/accessibility/button-name.js | title": [
        "audits[button-name].title"
      ],
      "core/audits/accessibility/button-name.js | description": [
        "audits[button-name].description"
      ],
      "core/audits/accessibility/bypass.js | title": [
        "audits.bypass.title"
      ],
      "core/audits/accessibility/bypass.js | description": [
        "audits.bypass.description"
      ],
      "core/audits/accessibility/color-contrast.js | title": [
        "audits[color-contrast].title"
      ],
      "core/audits/accessibility/color-contrast.js | description": [
        "audits[color-contrast].description"
      ],
      "core/audits/accessibility/definition-list.js | title": [
        "audits[definition-list].title"
      ],
      "core/audits/accessibility/definition-list.js | description": [
        "audits[definition-list].description"
      ],
      "core/audits/accessibility/dlitem.js | title": [
        "audits.dlitem.title"
      ],
      "core/audits/accessibility/dlitem.js | description": [
        "audits.dlitem.description"
      ],
      "core/audits/accessibility/document-title.js | title": [
        "audits[document-title].title"
      ],
      "core/audits/accessibility/document-title.js | description": [
        "audits[document-title].description"
      ],
      "core/audits/accessibility/duplicate-id-aria.js | title": [
        "audits[duplicate-id-aria].title"
      ],
      "core/audits/accessibility/duplicate-id-aria.js | description": [
        "audits[duplicate-id-aria].description"
      ],
      "core/audits/accessibility/empty-heading.js | title": [
        "audits[empty-heading].title"
      ],
      "core/audits/accessibility/empty-heading.js | description": [
        "audits[empty-heading].description"
      ],
      "core/audits/accessibility/form-field-multiple-labels.js | title": [
        "audits[form-field-multiple-labels].title"
      ],
      "core/audits/accessibility/form-field-multiple-labels.js | description": [
        "audits[form-field-multiple-labels].description"
      ],
      "core/audits/accessibility/frame-title.js | title": [
        "audits[frame-title].title"
      ],
      "core/audits/accessibility/frame-title.js | description": [
        "audits[frame-title].description"
      ],
      "core/audits/accessibility/heading-order.js | title": [
        "audits[heading-order].title"
      ],
      "core/audits/accessibility/heading-order.js | description": [
        "audits[heading-order].description"
      ],
      "core/audits/accessibility/html-has-lang.js | title": [
        "audits[html-has-lang].title"
      ],
      "core/audits/accessibility/html-has-lang.js | description": [
        "audits[html-has-lang].description"
      ],
      "core/audits/accessibility/html-lang-valid.js | title": [
        "audits[html-lang-valid].title"
      ],
      "core/audits/accessibility/html-lang-valid.js | description": [
        "audits[html-lang-valid].description"
      ],
      "core/audits/accessibility/html-xml-lang-mismatch.js | title": [
        "audits[html-xml-lang-mismatch].title"
      ],
      "core/audits/accessibility/html-xml-lang-mismatch.js | description": [
        "audits[html-xml-lang-mismatch].description"
      ],
      "core/audits/accessibility/identical-links-same-purpose.js | title": [
        "audits[identical-links-same-purpose].title"
      ],
      "core/audits/accessibility/identical-links-same-purpose.js | description": [
        "audits[identical-links-same-purpose].description"
      ],
      "core/audits/accessibility/image-alt.js | title": [
        "audits[image-alt].title"
      ],
      "core/audits/accessibility/image-alt.js | description": [
        "audits[image-alt].description"
      ],
      "core/audits/accessibility/image-redundant-alt.js | title": [
        "audits[image-redundant-alt].title"
      ],
      "core/audits/accessibility/image-redundant-alt.js | description": [
        "audits[image-redundant-alt].description"
      ],
      "core/audits/accessibility/input-button-name.js | title": [
        "audits[input-button-name].title"
      ],
      "core/audits/accessibility/input-button-name.js | description": [
        "audits[input-button-name].description"
      ],
      "core/audits/accessibility/input-image-alt.js | title": [
        "audits[input-image-alt].title"
      ],
      "core/audits/accessibility/input-image-alt.js | description": [
        "audits[input-image-alt].description"
      ],
      "core/audits/accessibility/label-content-name-mismatch.js | title": [
        "audits[label-content-name-mismatch].title"
      ],
      "core/audits/accessibility/label-content-name-mismatch.js | description": [
        "audits[label-content-name-mismatch].description"
      ],
      "core/audits/accessibility/label.js | title": [
        "audits.label.title"
      ],
      "core/audits/accessibility/label.js | description": [
        "audits.label.description"
      ],
      "core/audits/accessibility/landmark-one-main.js | title": [
        "audits[landmark-one-main].title"
      ],
      "core/audits/accessibility/landmark-one-main.js | description": [
        "audits[landmark-one-main].description"
      ],
      "core/audits/accessibility/link-name.js | title": [
        "audits[link-name].title"
      ],
      "core/audits/accessibility/link-name.js | description": [
        "audits[link-name].description"
      ],
      "core/audits/accessibility/link-in-text-block.js | title": [
        "audits[link-in-text-block].title"
      ],
      "core/audits/accessibility/link-in-text-block.js | description": [
        "audits[link-in-text-block].description"
      ],
      "core/audits/accessibility/list.js | title": [
        "audits.list.title"
      ],
      "core/audits/accessibility/list.js | description": [
        "audits.list.description"
      ],
      "core/audits/accessibility/listitem.js | title": [
        "audits.listitem.title"
      ],
      "core/audits/accessibility/listitem.js | description": [
        "audits.listitem.description"
      ],
      "core/audits/accessibility/meta-refresh.js | title": [
        "audits[meta-refresh].title"
      ],
      "core/audits/accessibility/meta-refresh.js | description": [
        "audits[meta-refresh].description"
      ],
      "core/audits/accessibility/meta-viewport.js | title": [
        "audits[meta-viewport].title"
      ],
      "core/audits/accessibility/meta-viewport.js | description": [
        "audits[meta-viewport].description"
      ],
      "core/audits/accessibility/object-alt.js | title": [
        "audits[object-alt].title"
      ],
      "core/audits/accessibility/object-alt.js | description": [
        "audits[object-alt].description"
      ],
      "core/audits/accessibility/select-name.js | title": [
        "audits[select-name].title"
      ],
      "core/audits/accessibility/select-name.js | description": [
        "audits[select-name].description"
      ],
      "core/audits/accessibility/skip-link.js | title": [
        "audits[skip-link].title"
      ],
      "core/audits/accessibility/skip-link.js | description": [
        "audits[skip-link].description"
      ],
      "core/audits/accessibility/tabindex.js | title": [
        "audits.tabindex.title"
      ],
      "core/audits/accessibility/tabindex.js | description": [
        "audits.tabindex.description"
      ],
      "core/audits/accessibility/table-duplicate-name.js | title": [
        "audits[table-duplicate-name].title"
      ],
      "core/audits/accessibility/table-duplicate-name.js | description": [
        "audits[table-duplicate-name].description"
      ],
      "core/audits/accessibility/table-fake-caption.js | title": [
        "audits[table-fake-caption].title"
      ],
      "core/audits/accessibility/table-fake-caption.js | description": [
        "audits[table-fake-caption].description"
      ],
      "core/audits/accessibility/target-size.js | title": [
        "audits[target-size].title"
      ],
      "core/audits/accessibility/target-size.js | description": [
        "audits[target-size].description"
      ],
      "core/audits/accessibility/td-has-header.js | title": [
        "audits[td-has-header].title"
      ],
      "core/audits/accessibility/td-has-header.js | description": [
        "audits[td-has-header].description"
      ],
      "core/audits/accessibility/td-headers-attr.js | title": [
        "audits[td-headers-attr].title"
      ],
      "core/audits/accessibility/td-headers-attr.js | description": [
        "audits[td-headers-attr].description"
      ],
      "core/audits/accessibility/th-has-data-cells.js | title": [
        "audits[th-has-data-cells].title"
      ],
      "core/audits/accessibility/th-has-data-cells.js | description": [
        "audits[th-has-data-cells].description"
      ],
      "core/audits/accessibility/valid-lang.js | title": [
        "audits[valid-lang].title"
      ],
      "core/audits/accessibility/valid-lang.js | description": [
        "audits[valid-lang].description"
      ],
      "core/audits/accessibility/video-caption.js | title": [
        "audits[video-caption].title"
      ],
      "core/audits/accessibility/video-caption.js | description": [
        "audits[video-caption].description"
      ],
      "core/config/default-config.js | a11yCategoryTitle": [
        "categories.accessibility.title"
      ],
      "core/config/default-config.js | a11yCategoryDescription": [
        "categories.accessibility.description"
      ],
      "core/config/default-config.js | a11yCategoryManualDescription": [
        "categories.accessibility.manualDescription"
      ],
      "core/config/default-config.js | metricGroupTitle": [
        "categoryGroups.metrics.title"
      ],
      "core/config/default-config.js | insightsGroupTitle": [
        "categoryGroups.insights.title"
      ],
      "core/config/default-config.js | insightsGroupDescription": [
        "categoryGroups.insights.description"
      ],
      "core/config/default-config.js | diagnosticsGroupTitle": [
        "categoryGroups.diagnostics.title"
      ],
      "core/config/default-config.js | diagnosticsGroupDescription": [
        "categoryGroups.diagnostics.description"
      ],
      "core/config/default-config.js | a11yBestPracticesGroupTitle": [
        "categoryGroups[a11y-best-practices].title"
      ],
      "core/config/default-config.js | a11yBestPracticesGroupDescription": [
        "categoryGroups[a11y-best-practices].description"
      ],
      "core/config/default-config.js | a11yColorContrastGroupTitle": [
        "categoryGroups[a11y-color-contrast].title"
      ],
      "core/config/default-config.js | a11yColorContrastGroupDescription": [
        "categoryGroups[a11y-color-contrast].description"
      ],
      "core/config/default-config.js | a11yNamesLabelsGroupTitle": [
        "categoryGroups[a11y-names-labels].title"
      ],
      "core/config/default-config.js | a11yNamesLabelsGroupDescription": [
        "categoryGroups[a11y-names-labels].description"
      ],
      "core/config/default-config.js | a11yNavigationGroupTitle": [
        "categoryGroups[a11y-navigation].title"
      ],
      "core/config/default-config.js | a11yNavigationGroupDescription": [
        "categoryGroups[a11y-navigation].description"
      ],
      "core/config/default-config.js | a11yAriaGroupTitle": [
        "categoryGroups[a11y-aria].title"
      ],
      "core/config/default-config.js | a11yAriaGroupDescription": [
        "categoryGroups[a11y-aria].description"
      ],
      "core/config/default-config.js | a11yLanguageGroupTitle": [
        "categoryGroups[a11y-language].title"
      ],
      "core/config/default-config.js | a11yLanguageGroupDescription": [
        "categoryGroups[a11y-language].description"
      ],
      "core/config/default-config.js | a11yAudioVideoGroupTitle": [
        "categoryGroups[a11y-audio-video].title"
      ],
      "core/config/default-config.js | a11yAudioVideoGroupDescription": [
        "categoryGroups[a11y-audio-video].description"
      ],
      "core/config/default-config.js | a11yTablesListsVideoGroupTitle": [
        "categoryGroups[a11y-tables-lists].title"
      ],
      "core/config/default-config.js | a11yTablesListsVideoGroupDescription": [
        "categoryGroups[a11y-tables-lists].description"
      ],
      "core/config/default-config.js | seoMobileGroupTitle": [
        "categoryGroups[seo-mobile].title"
      ],
      "core/config/default-config.js | seoMobileGroupDescription": [
        "categoryGroups[seo-mobile].description"
      ],
      "core/config/default-config.js | seoContentGroupTitle": [
        "categoryGroups[seo-content].title"
      ],
      "core/config/default-config.js | seoContentGroupDescription": [
        "categoryGroups[seo-content].description"
      ],
      "core/config/default-config.js | seoCrawlingGroupTitle": [
        "categoryGroups[seo-crawl].title"
      ],
      "core/config/default-config.js | seoCrawlingGroupDescription": [
        "categoryGroups[seo-crawl].description"
      ],
      "core/config/default-config.js | bestPracticesTrustSafetyGroupTitle": [
        "categoryGroups[best-practices-trust-safety].title"
      ],
      "core/config/default-config.js | bestPracticesUXGroupTitle": [
        "categoryGroups[best-practices-ux].title"
      ],
      "core/config/default-config.js | bestPracticesBrowserCompatGroupTitle": [
        "categoryGroups[best-practices-browser-compat].title"
      ],
      "core/config/default-config.js | bestPracticesGeneralGroupTitle": [
        "categoryGroups[best-practices-general].title"
      ]
    }
  }
}
