from mnemonic import Mnemonic


mnemo = Mnemonic ("english")

word_list = open(

    'list.txt',
    'a'
)
num=0

while True:
    num = num + 1
    words = mnemo.generate(strength=128)+'\n'
    word_list.write(words)
    print(num, words)

word_list.close()
