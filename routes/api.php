<?php

use App\Http\Controllers\EventsController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'events', 'as' => 'event.'], function() {
    Route::get('{event}', [EventsController::class, 'show'])->name('show');
    Route::post('/{event}', [EventsController::class, 'upsert'])->name('upsert');
});
