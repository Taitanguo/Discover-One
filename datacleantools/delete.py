import csv
import nltk
from nltk import PorterStemmer
with open("DataMiner.csv",'r') as f:
    with open("result.csv",'w') as f1:
        with open("company.txt") as text:
            words = set(text)
        #f.next() # skip header line
        for row in f:
            # stems = (PorterStemmer().stem_word(word) for word in row.split(" "))
            print " ".join(PorterStemmer().stem_word(word) for word in row.split(" ") if word not in words)
            # print " ".join(stem for stem in stems if stem not in words)

