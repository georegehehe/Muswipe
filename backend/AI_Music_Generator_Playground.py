#from basic_pitch.inference import predict_and_save
from mido import MidiFile
import pretty_midi
from melody_generator import MarkovChainMelodyGenerator, create_training_data, visualize_melody, create_training_data_ode_of_joy, create_training_data_3, create_training_data_jasmine
from music21 import *
import mixmusic

"""
A sandbox for developing Muswipe 2.0.
Currently we are testing a Markov Chain Model for Melody generation 
and have already incorporated it with the harmonizer module we built.
"""

training_data = create_training_data()
training_data.extend(create_training_data())
training_data.extend(create_training_data_3())
training_data.extend(create_training_data_jasmine())

states = [    
    ("C4", 0.25),
    ("D4", 0.25),
    ("E4", 0.25),
    ("F4", 0.25),
    ("G4", 0.25),
    ("A4", 0.25),
    ("B4", 0.25),
    ("C4", 0.5),
    ("D4", 0.5),
    ("E4", 0.5),
    ("F4", 0.5),
    ("G4", 0.5),
    ("A4", 0.5),
    ("B4", 0.5),
    ("C4", 0.75),
    ("D4", 0.75),
    ("E4", 0.75),
    ("F4", 0.75),
    ("G4", 0.75),
    ("A4", 0.75),
    ("B4", 0.75),
    ("C4", 1),
    ("D4", 1),
    ("E4", 1),
    ("F4", 1),
    ("G4", 1),
    ("A4", 1),
    ("B4", 1),
    ("C4", 1.5),
    ("D4", 1.5),
    ("E4", 1.5),
    ("F4", 1.5),
    ("G4", 1.5),
    ("A4", 1.5),
    ("B4", 1.5),
    ("C4", 2),
    ("D4", 2),
    ("E4", 2),
    ("F4", 2),
    ("G4", 2),
    ("A4", 2),
    ("B4", 2),
    ("C5", 0.25),
    ("D5", 0.25),
    ("E5", 0.25),
    ("F5", 0.25),
    ("G5", 0.25),
    ("A5", 0.25),
    ("C5", 0.5),
    ("D5", 0.5),
    ("E5", 0.5),
    ("F5", 0.5),
    ("G5", 0.5),
    ("A5", 0.5),
    ("C5", 0.75),
    ("D5", 0.75),
    ("E5", 0.75),
    ("F5", 0.75),
    ("G5", 0.75),
    ("A5", 0.75),
    ("C5", 1),
    ("D5", 1),
    ("E5", 1),
    ("F5", 1),
    ("G5", 1),
    ("A5", 1),
    ("C5", 1.5),
    ("D5", 1.5),
    ("E5", 1.5),
    ("F5", 1.5),
    ("G5", 1.5),
    ("A5", 1.5),
    ("C5", 2),
    ("D5", 2),
    ("E5", 2),
    ("F5", 2),
    ("G5", 2),
    ("A5", 2),
    ("C5", 4),
    ("D5", 4),
    ("E5", 4),
    ("F5", 4),
    ("G5", 4),
    ("A5", 4),
]
model = MarkovChainMelodyGenerator(states)
model.train(training_data)

generated_melody = model.generate(32)


def convert_format(input):
    time = 0.0
    ret = []
    for note, duration in input:
        new_note = note[0] + "-" + note[1]
        ret.append([time, float(duration), new_note])
        time += duration
    return ret

right_hand = convert_format(generated_melody)
mixmusic.determinelefthand(right_hand,[[None,4]], nameoffile='finalversion.wav')


# def parse_midi(filename):

#     my_score: stream.Score = converter.parse(filename)
#     k = my_score.analyze('key')
#     i = interval.Interval(k.tonic, pitch.Pitch('C'))
#     #sNew = my_score.transpose(i)
#     #sNew.write("midi", "transposed.mid")
#     my_score.write("midi", "not_transpoed.mid")
#     print(k.name)
#     # midi_data = pretty_midi.PrettyMIDI(filename)
#     # print(midi_data.get_pitch_class_transition_matrix())
#     # print("duration:",midi_data.get_end_time())
#     # print(f'{"note":>10} {"start":>10} {"end":>10}')
#     # for instrument in midi_data.instruments:
#     #     print("instrument:", instrument.program)
#     #     for note in instrument.notes:
#     #         print(f'{note.pitch:10} {note.start:10} {note.end:10}')

# parse_midi('sample/classical_piece.mid')
# # visualize_melody(generated_melody)






# TEMPO = 100

# # predict_and_save(
# #     ['sample/humming.m4a'],
# #     'sample',
# #     True,
# #     True,
# #     False,
# #     True,
# # )

# mid = mido.MidiFile('sample/classical_piece.mid', clip=True)
# print(mid.tracks)
# ONE_BEAT_TIME = 60 / TEMPO

# NUM_OF_BEAT = 32

# beat_ranges = [i * ONE_BEAT_TIME for i in range(NUM_OF_BEAT)]
