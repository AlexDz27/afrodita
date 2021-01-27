<!doctype html>
<html lang="en" class="h-100">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/style.css">
    <title>@yield('title')</title>
</head>
<body class="d-flex flex-column h-100">
    @include('sections.navbar')
    @include('sections.breadcrumbs')

    <main class="container-fluid mt-5">
        @yield('content')
    </main>

    @include('sections.footer')
</body>
</html>