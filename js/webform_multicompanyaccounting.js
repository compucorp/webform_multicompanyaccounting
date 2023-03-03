CRM.$(document).ready(function ($) {
  Drupal.behaviors.webformMulticompanyaccounting = {
    attach: function (context) {
      $('#edit-civicrm-1-contribution-1-contribution-contribution-page-id').change(function () {
        showMultiCompanyAccountingContributionPageConfigurationWarning($);
      });
      showMultiCompanyAccountingContributionPageConfigurationWarning($);
    }
  }
}(jQuery));

function showMultiCompanyAccountingContributionPageConfigurationWarning($) {
  $('#webformMulticompanyaccounting-configure-ft').remove();

  var contributionPageId = $('#edit-civicrm-1-contribution-1-contribution-contribution-page-id').val();
  if (contributionPageId == 0) {
    return;
  }

  var message = Drupal.t('For multicompany accounting to work correctly it is important to make sure that the owner organisation of the financial type of the contribution page matches the owner organisation of the financial type of any memberships added to the form. Failing to do so will lead to errors when generating invoices.');
  $('#civicrm-ajax-contribution-sets').before(
    '<div id="webformMulticompanyaccounting-configure-ft" class="messages warning">' +
    message +
    ' ' +
    '<a href="/civicrm/admin/contribute/settings?reset=1&action=update&id=' + contributionPageId + '">' +
    Drupal.t('Configure') +
    '</a></div>'
  );
}
