

phrase = "Don't panic!"
plist = list(phrase)
print(phrase)
print(plist)
for i in range(4):
    plist.pop()
plist.pop(0)
plist.remove("'")
plist.remove('p')
plist.remove(' ')
plist.insert(2, " ")
plist.insert(5, "p")
new_phrase = ''.join(plist)
print(plist)
print(new_phrase)