<div class="card">

    @php($weeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'])
    @php($period = (new Carbon\CarbonPeriod($now->copy()->startOfMonth(), '1 day', $now->copy()->endOfMonth()))->toArray())
    @php($firstWeek = $period[0]->format('w'))


    <div class="card-header d-flex justify-content-between">
        <h3 class="card-title">{{ $now->format('F') }} {{ $now->format('Y') }}</h3>
        <div class="card-actions">
            <button class="btn btn-primary btn-sm" wire:click="toggleDate('-')"> ⬅️ </button>
            <button class="btn btn-primary btn-sm" wire:click="toggleDate('+')"> ➡️ </button>
        </div>
    </div>

    <div class="card-body">

        <div class="d-grid" style="grid-template-columns: repeat(7, minmax(0, 1fr))">



            @foreach ($weeks as $week)
                <div class="col border text-center"><strong>{{ $week }}</strong></div>
            @endforeach



            {{-- add --}}

            @if ($firstWeek != 0)
                @for ($x = 1; $x <= $firstWeek; $x++)
                    <div class="col border text-center" style="min-height: 100px;">
                        &nbsp;
                    </div>
                @endfor
            @endif


            @foreach ($period as $day)
                <div class="col border text-center" style="min-height: 100px;">
                    <p>{{ $day->format('j') }}</p>

                    @if ($event !== null)
                        <p>

                            @if (in_array($day->format('w'), $event['days']) && $day->between($event['start'], $event['end']))
                                {{ $event['title'] }}
                            @endif
                        </p>
                    @endif



                </div>
            @endforeach



        </div>

    </div>
</div>
