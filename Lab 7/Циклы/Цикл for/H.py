a = int(input())
b = int(input())
n = int(input())
while a <= b:
    m = 0
    for i in range(1,a+1):
        if a%i == 0:
            m += 1
    if m >= n:
        print(a,'-',m,end=' - ')
        for i in range(1,a+1):
            if a%i == 0:
                print(i,end=' ')
        print()
    a += 1