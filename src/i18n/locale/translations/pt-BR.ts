export default {
  configuration_app_version: 'Versão do App',
  configuration_about: 'Sobre',
  configuration_clear_option: 'Limpar e reiniciar App',
  configuration_clear_confirm_button: 'Limpar agora',
  configuration_clear_alert_title: 'Você tem certeza?',
  configuration_clear_alert_text: 'Limpando o cache, você remove:\n'
    + 'configurações locais\n'
    + 'ID do Cliente e Segredo Oauth\n'
    + 'URL da sua instância',
  cancel: 'Cancelar',
  configuration_security: 'Segurança',
  configuration_share_feedback: 'Enviar Feedback',
  configuration_report_issue: 'Reportar um problema',
  configuration_sources: 'Código-fonte',
  configuration_debug: 'Depuração de erros',
  configuration_get_help: 'Obter ajudar',
  assetsHistoryCharts_chart_works: 'Este gráfico funciona melhor com até 4 contas.',
  assetsHistoryCharts_change_preferences: 'toque aqui',
  assetsHistoryCharts_choose_preferences_text: 'para escolher suas contas preferidas nas configurações do Firefly III:',
  assetsHistoryCharts_home_screen: 'Início',
  transaction_form_description_required: 'Descrição é obrigatória.',
  transaction_form_description_short: 'Descrição é curta demais.',
  transaction_form_amount_required: 'Valor é obrigatória.',
  transaction_form_description_label: 'Descrição',
  transaction_form_sourceAccount_label: 'Conta de origem',
  transaction_form_destinationAccount_label: 'Conta de destino',
  transaction_form_date_label: 'Data',
  transaction_form_amount_label: 'Valor',
  transaction_form_foreign_amount_label: 'Valor em moeda estrangeira',
  transaction_form_category_label: 'Categoria',
  transaction_form_notes_label: 'Notas',
  transaction_form_budget_label: 'Orçamento',
  transaction_form_tags_label: 'Tags',
  transaction_form_reset_button: 'Limpar',
  transaction_form_submit_button: 'Enviar',
  transaction_list_alert_title: 'Você tem certeza?',
  transaction_form_new_split_button: 'Adicionar divisão',
  transaction_list_alert_text: 'Esta transação será permanentemente removida:',
  transaction_list_delete_button: 'Excluir',
  transaction_list_cancel_button: 'Cancelar',
  auth_form_url_label: 'URL do Firefly III',
  auth_form_url_help: "sem a '/' no final.",
  auth_form_url_placeholder: "URL do Firefly III (sem a '/' no final)",
  auth_form_oauth_clientId: 'ID do cliente Oauth',
  auth_form_oauth_client_secret: 'Chave secreta do cliente Oauth',
  auth_form_secrets_help_message: 'Todas as chaves e senhas são mantidas no armazenamento seguro.',
  auth_form_set_redirect: 'URI de redirecionamento:',
  auth_form_need_help: 'Precisa de ajuda?',
  auth_form_submit_button_initial: 'Entrar',
  auth_form_submit_button_loading: 'Enviando...',
  auth_form_biometrics_lock: 'Bloqueio com biometria',
  home_accounts: 'Contas',
  layout_new_update_header: 'Nova atualização disponível',
  layout_new_update_body_text: 'Você pode atualizar depois, na aba Ajustes.',
  layout_new_update_cancel_button: 'Cancelar',
  layout_new_update_update_button: 'Atualizar agora',

  // from version 0.31
  transaction_screen_title: 'Nova transação',
  navigation_home_tab: 'Início',
  navigation_chart_tab: 'Gráfico',
  navigation_create_tab: 'Criar',
  navigation_transactions_tab: 'Transações',
  navigation_settings_tab: 'Ajustes',
  transaction_form_type_withdraw: 'Saída',
  transaction_form_type_deposit: 'Depósito',
  transaction_form_type_transfer: 'Transferência',

  // from 0.4.1
  period_switcher_monthly: 'Mês',
  period_switcher_quarterly: 'Trimestre',
  period_switcher_semiannually: 'Semestre',
  period_switcher_yearly: 'Ano',
  error_widget_title: 'Algo deu errado',
  home_container_error_title: 'Algo deu errado',
  home_container_error_description: 'Falha ao buscar a chave de acesso',
  oauth_token_error_title: 'Algo deu errado',
  oauth_token_error_description: 'Falha ao buscar a chave de acesso',
  oauth_token_info_title: 'Info',
  oauth_token_info_description: 'Autenticação cancelada, verifique o ID do cliente e URL da instância.',
  oauth_token_success_title: 'Sucesso',
  oauth_token_success_description: 'Temos uma conexão segura com sua instância do Firefly III.',
  transaction_form_success_title: 'Sucesso',
  transaction_form_success_description: 'Transação criada. Toque aqui para ir para a lista de transações.',
  transaction_form_error_title: 'Erro',
  home_header_time_range_year: 'Ano',
  home_header_time_range_q: 'T', // Put an abbreviation that best represents a quarter
  home_header_time_range_s: 'S', // Put an abbreviation that best represents a semiannual

  // from 0.6.0
  balance: 'Saldo',
  history: 'Histórico',
  home_categories: 'Categorias',
  home_net_worth: 'Patrimônio Líquido',

  // from 0.7.0
  home_budgets: 'Orçamentos',
  configuration_ui: 'Interface do Usuário',
  configuration_color_mode: 'Modo Escuro',
  auth_form_personal_access_token_label: 'Chave de Acesso Pessoal',
  auth_use_personal_access_token: 'Usar uma Chave de Acesso Pessoal',
  auth_external_heads_up: '❗️ Se você está usando um provedor externo de autenticação, como Auhtelia, Keycloak, Cloudflare Tunnels, etc, o cliente OAuth não irá funcionar. Você só poderá usar uma Chave de Acesso Pessoal.',
  auth_create_new_oauth_client: 'Crie um novo cliente Oauth na aba OAuth, aqui:',
  auth_create_new_personal_access_token: 'Crie uma nova Chave de Acesso Pessoal, na aba OAuth, aqui:',
  oauth_wrong_token_error_description: 'Falha ao validar o accessToken, por favor, verifique seu token ou a URL da sua instância.',
  transaction_screen_edit_title: 'Editar Transação',

  // from 0.9.0
  transaction_form_foreign_currency_label: 'Moeda estrangeira',
  transaction_form_group_title_label: 'Descrição da transação dividida',
  transaction_form_group_title_placeholder: 'Título',
  transaction_form_group_title_helper: 'Se você criar uma transação dividida, deverá haver uma descrição global obrigatória, para todas as divisões da transação.',
  configuration_review_app_ios: 'Avalie o Abacus na AppStore',
  configuration_review_app_android: 'Avalie o Abacus no  Google Play',

  // from 0.9.2
  assets_history_chart: 'Contas',
  balance_history_chart: 'Patrimônio Líquido',
  balance_history_chart_no_data: 'Para acessar esse gráfico, por favor atualize seu Firefly III para a versão mais recente.',
  account_not_included_in_net_worth: '* Conta não incluída no Patrimônio Líquido.',

  // from 0.10.0
  period: 'Período',
  currency: 'Moeda',

  home_all_accounts: 'Todas as contas',

  // from 0.10.3
  router_back_button: 'Voltar',
  transaction_clone: 'Clonar',
  transaction_delete: 'Apagar',

  // from X.X.X
  bills_paid: 'Pago até',
  due_by: 'Vence em',
  date_unavailable: 'aviso prévio',

  // from 0.19.0
  configuration_theme: 'Personalização',
  configuration_theme_selection: 'Alterar tema de cores',
  configuration_theme_title: 'Temas de cores',
};
