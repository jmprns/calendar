<?php

namespace App\Http\Livewire\Event;

use App\Models\Event;
use Livewire\Component;

class Form extends Component
{
    public $title, $start, $end, $days = [];

    protected $rules = [
        'title' => ['required'],
        'start' => ['date', 'before_or_equal:end'],
        'end'   => ['date', 'after_or_equal:start'],
        'days'  => ['required', 'array']
    ];

    public function submit()
    {
        $this->emit('eventUpsert', $this->validate());
    }



    public function render()
    {
        return view('livewire.event.form');
    }
}
