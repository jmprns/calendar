<?php

namespace App\Http\Livewire\Event;

use Carbon\Carbon;
use App\Models\Event;
use Livewire\Component;
use Carbon\CarbonPeriod;

class Calendar extends Component
{

    public $now, $event;

    protected $listeners = ['eventUpsert'];


    public function mount()
    {
        $this->now = Carbon::now();
    }

    public function eventUpsert($data)
    {
        // fixing the days
        $data['days'] = array_map('intval', $data['days']);

        $event = Event::updateOrCreate(
            ['id' => $this->event['id'] ?? 0],
            $data
        );

        $status = ($event->wasRecentlyCreated) ? "created" : "updated";
        $this->event = $event->toArray();

        $this->dispatchBrowserEvent('alert-livewire', ['message' => 'Event was '.$status.' successfully.']);
    }

    public function toggleDate($method)
    {
        if($method == '+'){
            $this->now->addMonth();
        }elseif($method == '-'){
            $this->now->subMonth();
        }

        $this->period = (new CarbonPeriod($this->now->copy()->startOfMonth(), '1 day', $this->now->copy()->endOfMonth()))->toArray();
    }

    public function render()
    {
        return view('livewire.event.calendar');
    }
}
