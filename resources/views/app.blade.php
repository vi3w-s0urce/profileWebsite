<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <style>
        @font-face {
            font-family: "Mondwest";
            src: url("/assets/fonts/Mondwest.woff") format("woff");
            font-weight: normal;
            font-style: normal;
        }

        @font-face {
            font-family: "Hack";
            src: url("/assets/fonts/Hack-Regular.woff") format("woff");
            font-weight: normal;
            font-style: normal;
        }

        @font-face {
            font-family: "Hack";
            src: url("/assets/fonts/Hack-Bold.woff") format("woff");
            font-weight: 700;
            font-style: normal;
        }
    </style>
    @routes
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
