# Takes an encrypted string and decrypts it according to the following algorithm
# 1) Convert to ASCII
# 2) Adjust ASCII values according to following algorithm:
#    0 for first char., -1 for second char., -2 for third char.
# 3) Converts back to text
# 4) Returns text
