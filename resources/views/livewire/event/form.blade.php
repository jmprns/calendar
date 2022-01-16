<div class="card p-3">

    @php($weeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'])

    <form wire:submit.prevent='submit'>
        <div class="mb-3">
            <label for="eventName" class="form-label">Event Name</label>
            <input wire:model.lazy="title" type="text" class="form-control @error('title') is-invalid @enderror"
                id="eventName">
            @error('title') <div class="invalid-feedback">{{ $message }}</div> @enderror

        </div>

        <div class="row">
            <div class="col-6">
                <div class="mb-3">
                    <label for="startDate" class="form-label">From</label>
                    <input wire:model.lazy="start" type="date" class="form-control @error('start') is-invalid @enderror"
                        id="startDate">
                    @error('start') <div class="invalid-feedback">{{ $message }}</div> @enderror

                </div>
            </div>
            <div class="col-6">
                <div class="mb-3">
                    <label for="startDate" class="form-label">To</label>
                    <input wire:model.lazy="end" type="date" class="form-control @error('end') is-invalid @enderror"
                        id="startDate">
                    @error('end') <div class="invalid-feedback">{{ $message }}</div> @enderror
                </div>
            </div>
        </div>

        <div class="mb-3">
            @foreach ($weeks as $key => $day)
                <div class="form-check form-check-inline">
                    <input wire:model.lazy="days" class="form-check-input @error('days') is-invalid @enderror"
                        type="checkbox" id="inlineCheckbox{{ $key }}" value="{{ $key }}">
                    <label class="form-check-label" for="inlineCheckbox{{ $key }}">{{ $day }}</label>
                </div>
            @endforeach


        </div>


        <button class="btn btn-primary">
            <div wire:loading wire:target="submit">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Processing
            </div>

            <span wire:loading.remove wire:target="submit">
                Save
            </span>
        </button>
    </form>
</div>
