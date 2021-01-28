<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

class AuthAdmin
{
    private string $username;
    private string $password;

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Invokes pop-up with login and password. If user cancels authentication, throw 401
        $_SERVER['PHP_AUTH_USER'] ?? throw new UnauthorizedHttpException('Basic realm="Dashboard"');

        $this->setCredentials($_SERVER['PHP_AUTH_USER'], $_SERVER['PHP_AUTH_PW']);

        if ($this->hasFailedToLogin()) {
            // Invoke pop-up again
            throw new UnauthorizedHttpException('Basic realm="Dashboard"');
        }

        return $next($request);
    }

    private function hasFailedToLogin(): bool
    {
        return ($this->username === config('admin.username') && $this->password === config('admin.password')) === false;
    }

    private function setCredentials($username, $password)
    {
        $this->username = $username;
        $this->password = $password;
    }
}
