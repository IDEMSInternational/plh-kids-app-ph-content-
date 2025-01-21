import { extendDeploymentConfig } from "scripts";
const config = extendDeploymentConfig({ name: "plh_facilitator_ph", parent: "plh_facilitator" });

/**
 * The default config should ideally be a superset of any extended configs
 * to allow for easier post-processing
 */

config.google_drive.sheets_folder_ids =  [
  "1k8zJfBeOm18gYDsk0XmdUm7OFtZDUY9R",  //Global
  "1SUErA3iOev9XiOkQfOmmiDHtvnKRY6Go"   //PH Sheets
];

config.google_drive.assets_folder_ids = [
  "1KcHDI7O4o2_FZ_YlXsz-8OqN3ehsfdVf", 
	"1GA6vgLIC2aPPRzUJkm_albAvPdMa3XUK" //PH assets
];


config.git = {
  content_repo: "https://github.com/IDEMSInternational/plh-facilitator-app-ph-content.git",
  content_tag_latest: "1.1.2",
};

config.api.db_name = "plh_facilitator_ph"

config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "Facilitator PH";
config.app_config.APP_HEADER_DEFAULTS.title = "Facilitator PH";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from Facilitator PH";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from Facilitator PH";
config.app_config.APP_THEMES.available = ["default", "professional"];
config.app_config.APP_THEMES.defaultThemeName = "professional";
config.app_config.APP_UPDATES.enabled = true;
config.app_config.APP_UPDATES.completeUpdateTemplate = "app_update_complete";
config.app_config.APP_FOOTER_DEFAULTS.templateName = "footer";
config.app_config.APP_THEMES.available = ["plh_facilitator_mx"];
config.app_config.APP_THEMES.defaultThemeName = "plh_facilitator_mx";

config.error_logging = { dsn: "https://ca84802206d44c49b553c7dfc68b5e0e@app.glitchtip.com/6093"};

export default config;
