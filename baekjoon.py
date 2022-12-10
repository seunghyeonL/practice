f = open('./input.txt', 'r')
lines = f.readlines()
N = int(lines[0])

def hanoiProcess(n, start, dest) :
    result = []
    if n == 1 : 
        return [[start, dest]]

    dest1 = 0
    for i in range(1, 4) :
        if (i != start) & (i != dest) : 
            dest1 = i
            break
    
    for el in hanoiProcess(n-1, start, dest1) : 
        result.append(el)
    result.append([start, dest])
    for el in hanoiProcess(n-1, dest1, dest) : 
        result.append(el)

    return result

result = hanoiProcess(N, 1, 3)

print(len(result))
for el in result :
    print(str(el[0])+' '+str(el[1]))


