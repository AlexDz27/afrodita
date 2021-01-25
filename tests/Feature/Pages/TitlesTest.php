<?php

namespace Tests\Feature\Pages;

use Tests\TestCase;

class TitlesTest extends TestCase
{
    /*
    | Test if pages' title are as follows:
    | Home: {{ config('app.name_home') }} (Afrodita - beauty studio in Kobrin)
    | Other pages: Afrodita | :pageTitle
    */
    public function testHome()
    {
        $response = $this->get('/');

        $response->assertSeeText(config('app.name_home'));
    }

    public function testAboutUs()
    {
        $response = $this->get('/about-us');

        $response->assertSeeTextInOrder(['Afrodita |', 'About Us']);
    }

    public function testCatalog()
    {
        $response = $this->get('/catalog');

        $response->assertSeeTextInOrder(['Afrodita |', 'Catalog']);
    }
}
