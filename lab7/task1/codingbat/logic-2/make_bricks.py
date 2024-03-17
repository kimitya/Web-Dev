def make_bricks(small, big, goal):
  return goal % 5 - small <= 0 and small + 5 * big >= goal

# 1 используя все большие, проверяем что хватит маленьких чтобы добить
# 2 общее кол-во хватает чтобы выполнить цель