$(document).ready(function () {
  $('.btn').click(function (e) {
    e.preventDefault();
    let num = parseFloat($(this).html());
    $('.calc__screen').append(num);
    $('.calc__output').val($('.calc__output').val() + num);
  });

  $('.op').click(function (e) {
    e.preventDefault();
    let op = $(this).html();
    $('.calc__screen').append(op);
    $('.calc__output').val($('.calc__output').val() + op);
  });

  $('.calc__eq').click(function () {
    $('.calc__output').val(eval($('.calc__output').val()));
    $('.calc__screen').html(eval($('.calc__output').val()));
  });

  $('.calc__c').click(function () {
    $('.calc__output').val('');
    $('.calc__screen').html('');
  });
});
