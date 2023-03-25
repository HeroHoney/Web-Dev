n = int(input())
x = 2
power = 1
while x <= n:
    x *= 2
    power += 1
print(power - 1, x // 2)