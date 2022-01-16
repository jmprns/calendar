<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventRequest;
use App\Models\Event;

class EventsController extends Controller
{
    public function show(Event $event)
    {
        return response($event);
    }

    public function upsert(EventRequest $request, $id)
    {

        $event = Event::updateOrCreate(
            ['id' => $id],
            $this->data($request->validated())
        );

        $status = ($event->wasRecentlyCreated) ? 201 : 200;
        return response()->json($event, $status);
    }

    private function data(array $data): array
    {
        $data['days'] = array_map('intval', $data['days']);
        return $data;
    }
}
