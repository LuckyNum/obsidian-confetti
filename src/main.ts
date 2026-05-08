import {Plugin} from 'obsidian';
import {DEFAULT_SETTINGS, ConfettiSettings, ConfettiSettingTab} from "./settings";

export default class ConfettiPlugin extends Plugin {
	settings: ConfettiSettings;

	async onload() {
		await this.loadSettings();

		this.addSettingTab(new ConfettiSettingTab(this.app, this));
	}

	onunload() {
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData() as Partial<ConfettiSettings>);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
