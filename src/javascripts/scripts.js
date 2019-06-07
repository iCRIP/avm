/* eslint-disable */
// Add your scripts here
import * as jQuery from 'jquery';
import 'bootstrap';
import { basename } from 'path';

jQuery(document).ready(function ($) {
  $('.ham').click(function () {
    $(this).toggleClass('active');
    $('#page-start').toggleClass('active');
    $('.page-menu').toggleClass('active');
  });

  $(window).on('load', function () {
    $('.body').addClass('active');
  });

  let percent = 0;
  const bar = $('.carousel-runner-progress');
  const crsl = $('#main-carousel');

  function progressBarCarousel() {
    bar.css({ width: `${percent}%` });
    percent += 0.5;
    if (percent > 100) {
      percent = 0;
      crsl.carousel('next');
    }
  }
  crsl.carousel({
    interval: false,
    pause: true,
  })

  crsl.carousel().on('slide.bs.carousel', function () {
    percent = 0;
    bar.css({
      width: 0,
    })
  })

  let barInterval = setInterval(progressBarCarousel, 30);

  crsl.hover, (
  function () {
    clearInterval(barInterval);
  },
  function () {
    barInterval = setInterval(progressBarCarousel, 30);
  });

  $('.carousel-indicators a').click(function (event) {
    event.stopPropagation();
  })
    
  $('#main-carousel').on('slide.bs.carousel', function (event) {
    const index = event.to + 1;
    const digit = index < 10 ? `0${index}` : index;

    $('.carousel-runner-current').text(digit);
  });

  
  $('.filter-select').hover(function () {
    $(this).addClass('active');
  }, function () {
    $(this).removeClass('active');
  });

  $('.filter-select-item').click(function () {
    const wrapper = $(this).parent().parent();
    const text = $(this).find('.filter-select-text').text();
    wrapper.find('.filter-select-current').text(text);
    wrapper.removeClass('active');
  });

  $('.price-arrow').click(function () {
    $(this).closest('.price-item').toggleClass('active');
  })
});
