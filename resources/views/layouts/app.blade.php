<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
</head>
<body>
    @include('sections.header')

    <main>
        @yield('content')
    </main>

    @include('sections.footer')
</body>
</html>