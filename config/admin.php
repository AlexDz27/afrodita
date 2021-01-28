<?php

/*
 * Here are located admin-specific constants.
 */

return [
    // Customers would call this phone number to get in touch with the studio.
    'phone' => env('ADMIN_PHONE', '+375 (33) 382-98-73'),

    // Credentials to access admin pages.
    'username' => env('ADMIN_USERNAME'),
    'password' => env('ADMIN_PASSWORD'),
];