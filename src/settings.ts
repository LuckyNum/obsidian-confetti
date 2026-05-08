import {App, PluginSettingTab, Setting} from "obsidian";
import ConfettiPlugin from "./main";

export interface ConfettiSettings {
	mySetting: string;
}

export const DEFAULT_SETTINGS: ConfettiSettings = {
	mySetting: 'default'
}

export class ConfettiSettingTab extends PluginSettingTab {
	plugin: ConfettiPlugin;

	constructor(app: App, plugin: ConfettiPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Settings #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}
