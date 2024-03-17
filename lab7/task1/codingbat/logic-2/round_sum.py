def round_sum(a, b, c):
  return round10(a)+round10(b)+round10(c)
  
def round10(n):
  str_n=str(n)
  last=int(str_n[-1])
  if last in range(5,10): return n+(10-last)
  else: return n-last