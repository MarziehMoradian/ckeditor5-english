// src/plugins/hashtag.js

import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import TextWatcher from "@ckeditor/ckeditor5-typing/src/textwatcher";

export default class HashtagPlugin extends Plugin {
  static get pluginName() {
    return "HashtagPlugin";
  }

  private getSuggestions: (text: string) => Promise<string[]>;

  constructor(editor: any) {
    super(editor);

    // Get the getSuggestions function from the plugin options
    this.getSuggestions = editor.config.get("hashtag.suggestions");
  }

  init() {
    const editor = this.editor;
    const viewDocument = editor?.editing?.view?.document;

    const model = editor.model;

    const pattern = /#\w*$/;
    const textWatcher = new TextWatcher(viewDocument, pattern);

    textWatcher.on("matched", async (evt: any, data: any) => {
      const matchedText = data.text;
      const results = await this.getSuggestions(matchedText);
      this.showSuggestions(results, data.range);
    });

    textWatcher.on("unmatched", () => {
      this.hideSuggestions();
    });

    this._addSuggestionClickListener();
  }

  async getHashtagSuggestions(text: string) {
    // Implementation to fetch hashtag suggestions from server
    return [];
  }

  showSuggestions(suggestions: string[], range: Range) {
    // Show suggestions logic
  }

  hideSuggestions() {
    // Hide suggestions logic
  }

  _addSuggestionClickListener() {
    // Add click listener logic
  }

  _insertHashtag(hashtag: string) {
    const editor = this.editor;
    const model = editor.model;

    editor.model.change((writer) => {
      const selection = model.document.selection;
      const position = selection.getFirstPosition();

      writer.insertText(hashtag, { bold: true });
    });
  }
}
