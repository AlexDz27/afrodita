<?php

namespace Tests\Feature\Pages;

use Tests\TestCase;

class SeeTest extends TestCase
{
    /*
    | Test if we can see Home, About Us, Catalog pages
    */
    public function testHome()
    {
        $response = $this->get('/');

        $response->assertSeeText('Home page');
    }

    public function testAboutUs()
    {
        $response = $this->get('/about-us');

        $response->assertSeeText('About Us page');
    }

    public function testCatalog()
    {
        $response = $this->get('/catalog');

        $response->assertSeeText('Services');
    }
}
