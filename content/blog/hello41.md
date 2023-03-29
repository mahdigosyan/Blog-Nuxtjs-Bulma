---
title: ساخت یک YouTube Downloader با نود جی اس
description: توی این پست میخواهیم یک یوتیوب دانلودر با استفاده از نود جی اس بسازیم تا به راحتی بتوانیم ویدیو های یوتیوب را دانلود کنیم
img: https://files.virgool.io/upload/users/36797/posts/kyplsqf2tpph/raznn6cgucsl.png
alt: ساخت یک YouTube Downloader با نود جی اس
slug: node-js-youtube-downloader
author:
  name: مهدی
  bio: قوسیان
tags:
  - nuxt
---
<h1 class="has-text-centered title is-1">ساخت یک YouTube Downloader با نود جی اس</h1>


من فکر میکنم که جی‌میل سرویس جذاب و کاربردی برای دریافت و ارسال و دسته بندی ایمیل‌ها هست، سریع هست، با سرویس‌های دیگه گوگل مثل درایو به خوبی یکپارچه شده و به جز برنامه استانداردی که برای مدیریت ایمل‌ها داره، میشه از inbox هم برای مدیریت ایمیل‌ها استفاده کرد. در کل پر از خوبیای ریز و درشت و هست، البته به جز اون قسمتی که به گوگل امکان بیشتری میدیم که ثانیه به ثانیه زندگیمون رو بیشتر نظارت کنه.
از اونطرف داشتن یه آدرس ایمیل روی دامین شخصی هم جذاب هست، و اگر بخواید از ایمیل گوگل روی دامین شخصی خودتون استفاده کنید باید سرویس گوگل بیزینس رو با قیمت ماهیانه ۵ تا ۱۰دلار بخرید که برای اکثر کاربران امکانات گوگل بیزینس مورد نیاز نیستن و در نهایت تمام امکانات سرویس‌های شخصی رو هم، مثل inbox، دریافت نمیکنید.

بگذریم، به هرحال راه‌هایی هست که بشه از اکانت جی‌میل به صورت رایگان روی دامین شخصی استفاده کرد، یکی از این راه‌ها استفاده از mailgun هست. و تفاوت اصلیش با خیلی از روش‌های دیگه این هست که نیاز نداریم سرور ایمیل رو خودمون اجرا یا مدیریت کنیم و فقط ثبت کردن یک دامنه شخصی برامون کافیه و هزینه‌ی هاست یا سرور رو از دوش خودمون برمیداریم.

![The San Juan Mountains are beautiful!](https://files.virgool.io/upload/users/36797/posts/kyplsqf2tpph/raznn6cgucsl.png "San Juan Mountains")