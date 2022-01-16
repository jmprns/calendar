<?php

namespace App\Http\Livewire\Event;

use App\Models\Event;
use Livewire\Component;

class Container extends Component
{
    protected $listeners = ['formHandler' => 'submit'];

    public Event $event;

    public function submit($data)
    {

        $this->emit('eventUpsert', $event);
    }


    public function render()
    {
        return view('livewire.event.container');
    }
}
