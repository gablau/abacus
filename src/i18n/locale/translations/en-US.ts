export default {
  configuration_app_version: 'App Version',
  configuration_about: 'About',
  configuration_clear_option: 'Clear cache',
  configuration_clear_confirm_button: 'Clear now',
  configuration_clear_alert_title: 'Are you sure?',
  configuration_clear_alert_text: 'Clearing cache will remove all your data from the app. Are you sure you want to continue?',
  cancel: 'Cancel',
  configuration_security: 'Security',
  configuration_share_feedback: 'Share Feedback',
  configuration_report_issue: 'Report Issue',
  configuration_sources: 'Sources',
  configuration_debug: 'Debug',
  configuration_get_help: 'Get Help',
  assetsHistoryCharts_chart_works: 'This chart works best with up to 4 accounts.',
  assetsHistoryCharts_change_preferences: 'click here',
  assetsHistoryCharts_choose_preferences_text: 'to choose your preferred accounts in the Firefly III preferences:',
  assetsHistoryCharts_home_screen: 'Home screen',
  transaction_form_description_required: 'Description is required.',
  transaction_form_description_short: 'Description is too short.',
  transaction_form_amount_required: 'Amount is required.',
  transaction_form_description_label: 'Description',
  transaction_form_sourceAccount_label: 'Source account',
  transaction_form_destinationAccount_label: 'Destination account',
  transaction_form_date_label: 'Date',
  transaction_form_amount_label: 'Amount',
  transaction_form_foreign_amount_label: 'Foreign amount',
  transaction_form_notes_label: 'Notes',
  transaction_form_category_label: 'Category',
  transaction_form_budget_label: 'Budget',
  transaction_form_tags_label: 'Tags',
  transaction_form_reset_button: 'Reset',
  transaction_form_submit_button: 'Submit',
  transaction_form_new_split_button: 'Add Split',
  transaction_list_alert_title: 'Are you sure?',
  transaction_list_alert_text: 'This transaction will be permanently removed:',
  transaction_list_delete_button: 'Delete',
  transaction_list_cancel_button: 'Cancel',
  auth_form_url_label: 'Firefly III backend URL',
  auth_form_url_help: "without '/' at the end.",
  auth_form_url_placeholder: "Firefly III backend URL (without '/' at the end)",
  auth_form_oauth_clientId: 'Oauth Client ID',
  auth_form_oauth_client_secret: 'Oauth Client Secret',
  auth_form_secrets_help_message: 'All secrets are kept in secure storage.',
  auth_form_set_redirect: 'Set redirect URI to:',
  auth_form_need_help: 'Need Help?',
  auth_form_submit_button_initial: 'Log In',
  auth_form_submit_button_loading: 'Submitting...',
  auth_form_biometrics_lock: 'Biometrics lock',
  home_accounts: 'Asset Accounts',
  layout_new_update_header: 'New Update Available',
  layout_new_update_body_text: 'You can always update later in Settings tab.',
  layout_new_update_cancel_button: 'Cancel',
  layout_new_update_update_button: 'Update now',

  // from version 0.31
  transaction_screen_title: 'New Transaction',
  navigation_home_tab: 'Home',
  navigation_chart_tab: 'Chart',
  navigation_create_tab: 'Create',
  navigation_transactions_tab: 'Transactions',
  navigation_settings_tab: 'Settings',
  transaction_form_type_withdraw: 'Withdraw',
  transaction_form_type_deposit: 'Deposit',
  transaction_form_type_transfer: 'Transfer',

  // from 0.4.1
  period_switcher_monthly: 'Monthly',
  period_switcher_quarterly: 'Quarterly',
  period_switcher_semiannually: 'Semiannually',
  period_switcher_yearly: 'Yearly',
  error_widget_title: 'Something went wrong',
  home_container_error_title: 'Something went wrong',
  home_container_error_description: 'Failed to get accessToken',
  oauth_token_error_title: 'Something went wrong',
  oauth_token_error_description: 'Failed to get accessToken',
  oauth_token_info_title: 'Info',
  oauth_token_info_description: 'Authentication cancel, check Client ID & backend URL.',
  oauth_token_success_title: 'Success',
  oauth_token_success_description: 'Secure connection ready with your Firefly III instance.',
  transaction_form_success_title: 'Success',
  transaction_form_success_description: 'Transaction created. Tap here to go to transactions list.',
  transaction_form_error_title: 'Error',
  home_header_time_range_year: 'Year',
  home_header_time_range_q: 'Q', // Put an abbreviation that best represents a quarter
  home_header_time_range_s: 'S', // Put an abbreviation that best represents a semiannual

  // from 0.6.0
  balance: 'Balance',
  history: 'History',
  home_categories: 'Categories',
  home_net_worth: 'Net Worth',

  // from 0.7.0
  home_budgets: 'Budgets',
  configuration_ui: 'User Interface',
  configuration_color_mode: 'Dark Mode',
  auth_form_personal_access_token_label: 'Personal Access Token',
  auth_use_personal_access_token: 'Use a Personal Access Token',
  auth_external_heads_up: '❗️If you\'re using an external authentication provider like Authelia, Keycloak, Cloudflare Tunnels, etc. OAuth Clients will not work. You can use Personal Access Tokens only.',
  auth_create_new_oauth_client: 'Create a new Oauth client on OAuth tab, here:',
  auth_create_new_personal_access_token: 'Create a new Personal Access Token on OAuth tab, here:',
  oauth_wrong_token_error_description: 'Failed to validate accessToken, please re-check your token or backend URL.',
  transaction_screen_edit_title: 'Edit Transaction',

  // from 0.9.0
  transaction_form_foreign_currency_label: 'Foreign currency',
  transaction_form_group_title_label: 'Description of the split transaction',
  transaction_form_group_title_placeholder: 'Title',
  transaction_form_group_title_helper: 'If you create a split transaction, there must be a global description for all splits of the transaction.',
  configuration_review_app_ios: 'Review Abacus on the AppStore',
  configuration_review_app_android: 'Review Abacus on Google Play',

  // from 0.9.2
  assets_history_chart: 'Accounts chart',
  balance_history_chart: 'Net Worth chart',
  balance_history_chart_no_data: 'To access this graph, please update FireflyIII to the latest version.',
  account_not_included_in_net_worth: '* Account not included in Net Worth.',

  // from 0.10.0
  period: 'Period',
  currency: 'Currency',

  home_all_accounts: 'All Accounts',

  // from 0.10.3
  router_back_button: 'Back',
  transaction_clone: 'Clone',
  transaction_delete: 'Delete',

  // from 0.11.0
  configuration_credentials: 'Credentials',
  configuration_manage_credentials: 'Manage Credentials',
  configuration_credentials_add_button: 'Add Credential',
  logout: 'Logout',

  // from 0.12.0
  credential_clear_confirm_button: 'Delete',
  credential_clear_alert_title: 'Are you sure?',
  credential_clear_cancel_button: 'Cancel',
  go_to_credentials: 'Go to Credentials',

  configuration_logout_alert_title: 'Logout',
  load_more: 'Load more',

  // from X.X.X
  home_bills: 'Bills',
  home_piggy_banks: 'Piggy Banks',
  bills_paid: 'Paid',
  bills_not_expected: 'Not expected',
  transaction_form_bill_label: 'Bill',
};
