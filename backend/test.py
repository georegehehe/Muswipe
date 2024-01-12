from midi2audio import FluidSynth
from mingus.containers import Note, Bar, Track
from mingus.containers.instrument import MidiInstrument
from mingus.containers.mt_exceptions import NoteFormatError
from mingus.midi import fluidsynth, midi_file_out
from mingus.midi.fluidsynth import FluidSynthSequencer
from mingus.core import chords
from midiutil import MIDIFile
from pydub import AudioSegment


track = 0
channel = 0
time = 0 
duration = 1 
tempo = 120  
volume = 100
MyMIDI = MIDIFile(3)
MyMIDI.addTempo(0, time, tempo)
MyMIDI.addProgramChange(0, 0, 0, 1)
MyMIDI.addProgramChange(1, 1, 0, 25)

chord_progression = ["Cmaj7", "Cmaj7", "Fmaj7", "Gdom7"]

NOTES = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B']
OCTAVES = list(range(11))
NOTES_IN_OCTAVE = len(NOTES)

errors = {
    'notes': 'Bad input, please refer this spec-\n'
}


def swap_accidentals(note):
    if note == 'Db':
        return 'C#'
    if note == 'D#':
        return 'Eb'
    if note == 'E#':
        return 'F'
    if note == 'Gb':
        return 'F#'
    if note == 'G#':
        return 'Ab'
    if note == 'A#':
        return 'Bb'
    if note == 'B#':
        return 'C'

    return note


def note_to_number(note: str, octave: int) -> int:
    note = swap_accidentals(note)
    assert note in NOTES, errors['notes']
    assert octave in OCTAVES, errors['notes']

    note = NOTES.index(note)
    note += (NOTES_IN_OCTAVE * octave)

    assert 0 <= note <= 127, errors['notes']

    return note

piano_notes = ['C', 'E', 'G', 'B', 'G', 'B', 'D']
piano_durations = [1, 1, 1, 1, 1, 1, 2]
guitar_notes = [['C', 'E', 'G'], ['C', 'E', 'G'],['C', 'E', 'G'],['C', 'E', 'G'],['C', 'E', 'G']]
guitar_durations = [2, 2, 2, 2, 1]

instrument_time = {0:0, 1:0, 2:0}

for pitch, duration in zip(piano_notes, piano_durations):
    time = instrument_time[0]
    MyMIDI.addNote(0, 0, note_to_number(pitch, 4), time, duration, volume)
    instrument_time[0] += duration

for pitches, duration in zip(guitar_notes, guitar_durations):
    time = instrument_time[1]
    for pitch in pitches:
        MyMIDI.addNote(1, 1, note_to_number(pitch, 4), time, duration, volume)
    instrument_time[1] += duration

for i in range(20):
    time = instrument_time[2]
    MyMIDI.addNote(2, 9, 57, time, 1, volume)
    instrument_time[2] += 1

with open('./test/guitar.mid', "wb") as output_file:
    MyMIDI.writeFile(output_file)

FluidSynth('Timbre.sf2').midi_to_audio('./test/guitar.mid','./test/guitar.wav')

