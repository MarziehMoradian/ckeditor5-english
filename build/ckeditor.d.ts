/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import { Autosave } from "@ckeditor/ckeditor5-autosave";
import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { CloudServices } from "@ckeditor/ckeditor5-cloud-services";
import { CodeBlock } from "@ckeditor/ckeditor5-code-block";
import type { EditorConfig } from "@ckeditor/ckeditor5-core";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { FontColor, FontSize } from "@ckeditor/ckeditor5-font";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { Highlight } from "@ckeditor/ckeditor5-highlight";
import {
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
} from "@ckeditor/ckeditor5-image";
import { Indent } from "@ckeditor/ckeditor5-indent";
import { Link } from "@ckeditor/ckeditor5-link";
import { List } from "@ckeditor/ckeditor5-list";
import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed";
import { Mention } from "@ckeditor/ckeditor5-mention";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { PasteFromOffice } from "@ckeditor/ckeditor5-paste-from-office";
import { TextTransformation } from "@ckeditor/ckeditor5-typing";
import { Undo } from "@ckeditor/ckeditor5-undo";
import { Base64UploadAdapter } from "@ckeditor/ckeditor5-upload";
import HashtagPlugin from "../src/plugins/hashtag";
declare class Editor extends ClassicEditor {
  static builtinPlugins: (
    | typeof Alignment
    | typeof Autoformat
    | typeof Autosave
    | typeof Base64UploadAdapter
    | typeof BlockQuote
    | typeof Bold
    | typeof CloudServices
    | typeof HashtagPlugin
    | typeof CodeBlock
    | typeof Essentials
    | typeof FontColor
    | typeof FontSize
    | typeof Heading
    | typeof Highlight
    | typeof Image
    | typeof ImageCaption
    | typeof ImageStyle
    | typeof ImageToolbar
    | typeof ImageUpload
    | typeof Indent
    | typeof Italic
    | typeof Link
    | typeof List
    | typeof MediaEmbed
    | typeof Mention
    | typeof Paragraph
    | typeof PasteFromOffice
    | typeof TextTransformation
    | typeof Undo
  )[];
  static defaultConfig: EditorConfig;
}
export default Editor;
