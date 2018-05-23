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
    case "dadsa":
    break;
    }
}