<?php

declare(strict_types=1);

namespace SlimKit\Plus\Packages\Blog\Providers;

use Illuminate\Support\ServiceProvider;
use Zhiyi\Plus\Support\ManageRepository;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the service provider.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadRoutesFrom(
            $this->app->make('path.plus-blog').'/router.php'
        );
    }

    /**
     * Regoster the service provider.
     *
     * @return void
     */
    public function register()
    {
        // Publish admin menu.
        $this->app->make(ManageRepository::class)->loadManageFrom('plus-blog', 'plus-blog:admin-home', [
            'route' => true,
            'icon' => '📦',
        ]);
    }
}
