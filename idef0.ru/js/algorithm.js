function code(name)
{
    switch (name){
//#region massive_c
    case "mas_c_max":
    return "void max(int a[], int n, int &max)\n\
{\n\
    max = a[0];\n\
    int i = 1;\n\
    while (i < n)\n\
    {\n\
        if (a[i] > max)\n\
            max = a[i];\n\
        i++;\n\
    }\n\
}\n" 
    break;
    case "mas_c_min":
    return "void min(int a[], int n, int &min)\n\
{\n\
    min = a[0];\n\
    int i = 1;\n\
    while (i < n)\n\
    {\n\
        if (a[i] < min)\n\
            min = a[i];\n\
        i++;\n\
    }\n\
}\n" 
    break;
    case "mas_c_sort":
    return "void bubbleSort(int* а, int n)\n\
{\n\
   int tmp, i, j;\n\
   for (i = 0; i < n - 1; i++) \n\
   {\n\
      for (j = i+1; j < n; j++) \n\
      {\n\
	if (а[i] > а[j])\n\
	{\n\
	   tmp = а[i];\n\
	   а[i] = а[j];\n\
	   а[j] = tmp;\n\
	}\n\
      }\n\
   }\n\
}\n"
    break;
    case "mas_c_sum":
    return "void sum(int a[], int n, int &s)\n\
{\n\
	int i;\n\
	s = 0;\n\
	for (i = 0; i < n; i++)\n\
	{\n\
		s = s + a[i];\n\
	}\n\
}\n"
    break;
    case "mas_c_sr":
    return "void sra(int s, int k, double &sr)\n\
{\n\
	sr = (double)s / k;\n\
}\n"
    break;
    case "mas_c_kol":
    return "void kol(int a[], int n, int &k)\n\
{\n\
	k = n;\n\
}\n"
    break;
    case "mas_c_del":
    return "void del(int *a, int &n, int key, int *a1, int &n1)\n\
{\n\
  int i = 0, j = 0; \n\
  while (i < n)\n\
  {\n\
    while (a[i] == key)\n\
    {\n\
      for (int j = i; j < n; j++)\n\
      {\n\
        a[j] = a[j + 1];\n\
      }\n\
      n--;\n\
    }\n\
    i++;\n\
  }\n\
  for (int i = 0; i < n; i++)\n\
  {\n\
    a1[i] = a[i];\n\
  }\n\
  n1 = n;\n\
}\n"
    break;
//#endregion

//#region prolog
    case "list_prolog_sum":
    return "sum([], 0).\n\
sum([H | T], S) :-\n\
sum(T, S1),\n\
S = H + S1.\n"
    break;
    case "list_prolog_max":
    return "max([X], X).\n\
max([X, Y | T], Max) :-\n\
X <= Y,\n\
max([Y | T], Max).\n\
max([X, Y | T], Max) :-\n\
X > Y,\n\
max([X | T], Max).\n"
    break;list_prolog_min
    case "list_prolog_min":
    return "min([X], X).\n\
min ([X, Y | T], Min) :-\n\
X > Y,\n\
min ([Y | T], Min).\n\
min ([X, Y | T], Min) :-\n\
X <= Y,\n\
min ([X | T], Min).\n"
    break;
    case "list_prolog_del":
    return "del([], _, []).\n\
del([X | T], X, T1) :-\n\
!,\n\
del(T, X, T1).\n\
del([H | T], X, [H | T1]) :-\n\
X <> H,\n\
del(T, X, T1).\n"
    break;
    case "list_prolog_kol":
    return "kol([], 0).\n\
kol([_ | T], K) :-\n\
kol(T, K1),\n\
K = K1 + 1.\n"
    break;
    case "list_prolog_sr":
    return "sra(X, Y, N) :-\n\
    N = X / Y.\n"
    break;
    case "list_prolog_sort":
    return "gt(X, Y) :-\n\
    X > Y.\n\
bubblesort(List, Sorted) :-\n\
    swap(List, List1),\n\
    !,\n\
    bubblesort(List1, Sorted).\n\
bubblesort(Sorted, Sorted).\n\
swap([X, Y | T], [Y, X | T]) :-\n\
    gt(X, Y).\n\
swap([Z | T], [Z | T1]) :-\n\
    swap(T, T1).\n"
    break;
//#endregion

    case "dadsa":
    break;
    }
}