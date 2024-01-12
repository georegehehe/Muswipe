from midiutil import MIDIFile

snare_id = 38
closed_highhat_id = 42
open_highhat_id = 46
basedrum_id = 35
hightom_id = 50
midtom_id = 47
lowtom_id = 45
cymbal_id = 49
rimshot_id = 37
electric_snare_id = 40
ride_cymbal_id = 51
crash_cymbal_id = 57

percussion_note_to_number = {"snare": snare_id, "closed highhat": closed_highhat_id, "open highhat": open_highhat_id, "basedrum": basedrum_id,
                              "hightom": hightom_id, "midtom": midtom_id, "lowtom": lowtom_id, "cymbal": cymbal_id, "rimshot": rimshot_id, 
                              "electric snare": electric_snare_id, "ride cymbal": ride_cymbal_id, "crash cymbal": crash_cymbal_id}
percussion_instrument_time = {"snare": 0, "basedrum":0, "highhat":0, "tom":0, "cymbal":0}

percussion_instrument_volume = {"snare": 70, "basedrum": 100, "highhat": 50, "tom": 70, "cymbal":70}



def dopercussion(MyMIDI, track):
    def add_rest(instrument, duration):
        percussion_instrument_time[instrument] += duration


    def add_notes(instrument, notes, duration):
        time = percussion_instrument_time[instrument]

        if type(notes) == str:
            MyMIDI.addNote(track, 9, percussion_note_to_number[notes], time, duration, percussion_instrument_volume[instrument])
        else:
            for note in notes:
                MyMIDI.addNote(track, 9, percussion_note_to_number[note], time, duration, percussion_instrument_volume[instrument])

        percussion_instrument_time[instrument] += duration

    # highhat pattern
    add_rest("highhat", 4)
    for i in range(0,64):
        add_notes("highhat", "closed highhat", 0.5)
    for i in range(0,28):
        add_notes("highhat", "open highhat", 1)
    add_notes("highhat", "open highhat", 0.75)
    add_rest("highhat", 0.75)
    add_notes("highhat", "open highhat", 0.75)
    add_rest("highhat", 0.75)
    add_notes("highhat", "open highhat", 1)
    add_rest("highhat", 4)


    # base pattern
    add_rest("basedrum", 4)
    for i in range(2):
        for j in range(0,3):
            add_notes("basedrum", "basedrum", 0.75)
            add_rest("basedrum", 0.75)
            add_notes("basedrum", "basedrum", 0.75)
            add_rest("basedrum", 0.25)
            add_notes("basedrum", "basedrum", 0.5)
            add_rest("basedrum", 0.5)
            add_notes("basedrum", "basedrum", 0.5)
            add_notes("basedrum", "basedrum", 0.75)
            add_rest("basedrum", 0.75)
            add_notes("basedrum", "basedrum", 0.75)
            add_rest("basedrum", 0.25)
            add_notes("basedrum", "basedrum", 0.5)
            add_rest("basedrum", 1)
        add_notes("basedrum", "basedrum", 0.75)
        add_rest("basedrum", 0.75)
        add_notes("basedrum", "basedrum", 0.75)
        add_rest("basedrum", 0.25)
        add_notes("basedrum", "basedrum", 0.5)
        add_rest("basedrum", 0.5)
        add_notes("basedrum", "basedrum", 0.5)
        add_notes("basedrum", "basedrum", 1)
        add_notes("basedrum", "basedrum", 1)
        if i == 1:
            add_notes("basedrum", "basedrum", 0.5)
            add_notes("basedrum", "basedrum", 0.5)
        else:
            add_notes("basedrum", "basedrum", 1)
        add_notes("basedrum", "basedrum", 1)

    add_rest("basedrum", 4)

    # snare drum pattern
    add_notes("snare", "rimshot", 1)
    add_notes("snare", "rimshot", 1)
    add_notes("snare", "rimshot", 1)
    add_notes("snare", "rimshot", 1)
    for i in range(2):
        for j in range(0,7):
            add_rest("snare", 1)
            add_notes("snare", "snare", 1)
        add_rest("snare", 1)
        add_notes("snare", "snare", 0.5)
        add_notes("snare", "snare", 0.25)
        add_notes("snare", "snare", 0.25)

        for j in range(0,6):
            add_rest("snare", 1)
            add_notes("snare", "snare", 1)
        if i == 0:
            add_rest("snare", 2)
            add_notes("snare", "snare", 0.75)
            add_notes("snare", "snare", 0.5)
            add_notes("snare", "snare", 0.5)
            add_notes("snare", "snare", 0.25)
        else:
            add_notes("snare", "electric snare", 0.5)
            add_notes("snare", "snare", 0.5)
            add_rest("snare", 0.5)
            add_notes("snare", "electric snare", 0.5)
            add_rest("snare", 1)
            add_notes("snare", "electric snare", 0.5)
            add_notes("snare", "snare", 0.25)
            add_notes("snare", "snare", 0.25)
    add_rest("snare", 4)

    # tom pattern
    add_rest("tom", 4)

    for i in range(2):
        for j in range(0,3):
            add_rest("tom", 4)
        add_rest("tom", 2)
        add_notes("tom", "hightom", 0.25)
        add_notes("tom", "hightom", 0.25)
        add_rest("tom", 1)
        add_notes("tom", "midtom", 0.25)
        add_notes("tom", "lowtom", 0.25)

        for j in range(0,3):
            add_rest("tom", 4)
        add_notes("tom", ["hightom", "midtom"], 0.75)
        add_rest("tom", 0.75)
        add_notes("tom", ["hightom", "lowtom"], 0.75)
        if i == 0:
            add_rest("tom", 0.25)
            add_notes("tom", ["midtom", "lowtom"], 0.5)
            add_rest("tom", 1)
        else:
            add_rest("tom", 0.75)
            add_notes("tom", ["midtom", "lowtom"], 1)
    add_rest("tom", 4)

    # cymbal pattern
    add_rest("cymbal", 4)
    for i in range(2):
        for j in range(0,4):
            add_rest("cymbal", 4)
        add_notes("cymbal", "cymbal", 4)
        add_rest("cymbal", 4)
        add_rest("cymbal", 4)
        if i == 0:
            add_rest("cymbal", 3)
            add_notes("cymbal", "ride cymbal", 0.5)
            add_notes("cymbal", "ride cymbal", 0.5)
        else:
            add_notes("cymbal", "crash cymbal", 1.5)
            add_notes("cymbal", "crash cymbal", 1.5)
            add_notes("cymbal", "crash cymbal", 1)
    add_notes("cymbal", ["cymbal", "crash cymbal"], 4)
