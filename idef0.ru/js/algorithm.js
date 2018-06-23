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

//#region list_c
    case "list_c_sum":
    return "int sum(Node* head)\n\
    {\n\
        Node* cur;\n\
        cur = head;\n\
        int s;\n\
        s = 0;\n\
        while (cur != NULL)\n\
        {\n\
            s = s + cur->value;\n\
            cur = cur->next;\n\
        }\n\
        return s;\n\
    }\n";
    break;
    case "list_c_max":
    return "void max(Node* head, int &max)\n\
{\n\
  max = head->value;\n\
  Node* cur = head;\n\
  while (cur != NULL)\n\
  {\n\
     if (max < cur->value)\n\
     max = cur->value;\n\
     cur = cur->next;\n\
  }\n\
}\n";
    break;
    case "list_c_min":
    return "void min(Node* head, int &min)\n\
{\n\
  min = head->value;\n\
  Node* cur = head;\n\
  while (cur != NULL)\n\
  {\n\
     if (min > cur->value)\n\
     min = cur->value;\n\
     cur = cur->next;\n\
  }\n\
}\n";
    break;
    case "list_c_del":
    return "void del(PNode &head, int value, PNode &newHead)\n\
    {\n\
      Node *current, *previous;\n\
      previous = current = head;\n\
      while (current) \n\
      {\n\
        if (current->value == value) \n\
        {\n\
          (current == head) \n\
          {\n\
             if (head->next == NULL) \n\
             {\n\
               delete current;\n\
               return;\n\
             }\n\
        head = current->next;\n\
        delete current;\n\
        current = head;\n\
           }\n\
           else {\n\
        if (current->next != NULL) {\n\
          previous->next = current->next;\n\
          delete current;\n\
          current = previous->next;\n\
        }\n\
        else {\n\
          previous->next = NULL;\n\
          delete current;\n\
          return;\n\
          }\n\
        }\n\
         }\n\
         else\n\
         {\n\
        previous = current;\n\
        current = previous->next;\n\
         }\n\
      }\n\
      newHead = head;\n\
    }\n";
    break;
    case "list_c_kol":
    return "int kol(Node* head)\n\
    {\n\
        Node* cur;\n\
        cur = head;\n\
        int k;\n\
        k = 0;\n\
        while (cur != NULL)\n\
        {\n\
            k = k + 1;\n\
            cur = cur->next;\n\
        }\n\
        return k;\n\
    }\n";
    break;
    case "list_c_sr":
    return "void sra(int s, int k, double &sr)\n\
    {\n\
        sr = (double)s / k;\n\
    }\n"
    break;
    case "list_c_sort":
    return "void sort(Node *head)\n\
    {\n\
      struct Node *a = NULL;\n\
      struct Node *b = NULL;\n\
      struct Node *c = NULL;\n\
      struct Node *e = NULL;\n\
      struct Node *tmp = NULL;\n\
      while (e != head->next)\n\
      {\n\
        c = a = head;\n\
        b = a->next;\n\
        while (a != e)\n\
        {\n\
          if (a->value > b->value)\n\
          {\n\
        if (a == head)\n\
        {\n\
          tmp = b->next;\n\
          b->next = a;\n\
          a->next = tmp;\n\
          head = b;\n\
          c = b;\n\
        }\n\
        else\n\
        {\n\
          tmp = b->next;\n\
          b->next = a;\n\
          a->next = tmp;\n\
          c->next = b;\n\
          c = b;\n\
        }\n\
           }\n\
           else\n\
           {\n\
        c = a;\n\
        a = a->next;\n\
           }\n\
           b = a->next;\n\
           if (b == e)\n\
        e = a;\n\
         }\n\
       }\n\
    }\n";
    break;

//#endregion

//#region string_c
case "string_c_max":
return "char max(char *str)\n\
{\n\
	char max = str[0];\n\
	for (int i = 0; i < strlen(str)-1; i++)\n\
	{\n\
		if (max < str[i])\n\
			max = str[i];\n\
	}\n\
	return max;\n\
}\n";
break;
case "string_c_min":
return "char min(char *str)\n\
{\n\
	char min = str[0];\n\
	for (int i = 0; i < strlen(str)-1; i++)\n\
	{\n\
		if (min < str[i])\n\
			min = str[i];\n\
	}\n\
	return min;\n\
}\n";
break;
case "string_c_del":
return "void del(char *s, char key)\n\
{\n\
   int i, m;\n\
   m = 0;\n\
   for (i = 0; i < strlen(s); i++)\n\
   {\n\
   if (s[i] == key) \n\
      m = m + 1;\n\
   else s[i - m] = s[i];\n\
   }\n\
   s[strlen(s) - m] = '\0';\n\
}\n";
break;
case "string_c_sort":
return "void sort(char *a)\n\
{\n\
   int tmp, i, j;\n\
   for (i = 0; i < strlen(a) - 1; i++) \n\
   {\n\
      for (j = 0; j < strlen(a) - 1; j++) \n\
      {\n\
	if (a[j + 1] > a[j])\n\
	{\n\
	   tmp = a[j + 1];\n\
	   a[j + 1] = a[j];\n\
	   a[j] = tmp;\n\
	}\n\
      }\n\
   }\n\
}\n";
break;
//#endregion

//#region textfile_c
case "textfile_c_max":
return 'void max(FILE *file, int &max)\n\
{\n\
  fseek(file, 0L, SEEK_SET);\n\
  fscanf(file, "%d", &max);\n\
  int num;\n\
  while (!feof(file))\n\
  {\n\
    fscanf(file, "%d", &num);\n\
    if (num > max)\n\
    max = num;\n\
  }\n\
}\n';
break;
case "textfile_c_min":
return 'void min(FILE *file, int &min)\n\
{\n\
  fseek(file, 0L, SEEK_SET);\n\
  fscanf(file, "%d", &min);\n\
  int num;\n\
  while (!feof(file))\n\
  {\n\
    fscanf(file, "%d", &num);\n\
    if (num > min)\n\
    min = num;\n\
  }\n\
}\n';
break;
case "textfile_c_del":
return 'void del(FILE *file, char simv)\n\
{\n\
   FILE *out;\n\
   char buffer[50];\n\
   fseek(file, 0L, SEEK_SET);\n\
   fopen_s(&out, "binput222.txt", "w+");\n\
   while (!feof(file))\n\
   {\n\
      fgets(buffer, 50, file);\n\
      while (strstr(buffer, &simv) - buffer >= 0)\n\
      {\n\
         for (int i = strstr(buffer, &simv) - buffer; i < strlen(buffer); i++)\n\
	buffer[i] = buffer[i + 1];\n\
      }\n\
      fputs(buffer, out);\n\
   }\n\
   fclose(file);\n\
   fclose(out);\n\
   remove("input.txt");\n\
   rename("binput222.txt", "input.txt");\n\
   fopen_s(&file, "input.txt", "r+b");\n\
}\n';
break;
case "textfile_c_sort":
return 'void sort(FILE *filein)\n\
{\n\
   int lenstr, cstr;\n\
   char buffer[11], buffer2[11];\n\
   int i = 0;\n\
   int N = cstr;\n\
   fseek(filein, 0, SEEK_SET);\n\
   while (i<(sizeof(buffer))*(N-1))\n\
   {\n\
      //Читаем первую из сравниваемых записей\n\
      fseek(filein, i, SEEK_SET);\n\
      fread(buffer, (sizeof(buffer)), 1, filein);\n\
      buffer[10] = "\n";\n\
      printf("buffer %s\n", buffer);\n\
      int j = i + (sizeof(buffer))+1;\n\
      while (j < ((sizeof(buffer)))*N)\n\
      {\n\
	//Читаем вторую из сравниваемых записей\n\
         fseek(filein, j, SEEK_SET);\n\
	fread(buffer2, (sizeof(buffer)), 1, filein);\n\
	buffer2[10] = "\n";\n\
	printf("buffer2 %s\n", buffer2);\n\
         //Если первая запись больше второй, то ...\n\
	if (strcmp(buffer, buffer2) > 0)\n\
	{\n\
   	   //ОБМЕН ЗАПИСЕЙ\n\
	   int pos = i;\n\
	   fseek(filein, pos, SEEK_SET);\n\
	   fwrite(buffer2, (sizeof(buffer)), 1, filein);\n\
	   pos = j;\n\
	   fseek(filein, pos, SEEK_SET);\n\
	   fwrite(buffer, (sizeof(buffer)), 1, filein);\n\
	   strncpy_s(buffer, buffer2, lenstr);\n\
	   buffer[10] = "\n";\n\
	   printf("buffer! %s\n", buffer);\n\
	   printf("buffer!2 %s\n", buffer2);\n\
	}\n\
	j += (sizeof(buffer)) + 1;\n\
      }\n\
      i += (sizeof(buffer)) + 1;\n\
   }\n\
}\n';
break;
//#endregion

//#region binfile_c
case "binfile_c_max":
return "void max(FILE *file, int n, int &max)\n\
{\n\
  fseek(file, 0L, SEEK_SET);\n\
  struct Data temp;\n\
  fread(&temp.day, sizeof(temp.day), 1, file);\n\
  fread(&max, sizeof(temp.mes), 1, file);\n\
  fread(&temp.god, sizeof(temp.god), 1, file);\n\
  int i = 1;\n\
  while (i<n)\n\
  {\n\
     fread(&temp.day, sizeof(temp.day), 1, file);\n\
     fread(&temp.mes, sizeof(temp.mes), 1, file);\n\
     fread(&temp.god, sizeof(temp.god), 1, file);\n\
     if (temp.mes > max) \n\
     max = temp.mes;\n\
     i++;\n\
  }\n\
}\n";
break;
case "binfile_c_min":
return "void min(FILE *file, int n, int &min)\n\
{\n\
  fseek(file, 0L, SEEK_SET);\n\
  struct Data temp;\n\
  fread(&temp.day, sizeof(temp.day), 1, file);\n\
  fread(&min, sizeof(temp.mes), 1, file);\n\
  fread(&temp.god, sizeof(temp.god), 1, file);\n\
  int i = 1;\n\
  while (i<n)\n\
  {\n\
     fread(&temp.day, sizeof(temp.day), 1, file);\n\
     fread(&temp.mes, sizeof(temp.mes), 1, file);\n\
     fread(&temp.god, sizeof(temp.god), 1, file);\n\
     if (temp.mes < min) \n\
     min = temp.mes;\n\
     i++;\n\
  }\n\
}\n";
break;
case "binfile_c_del":
return 'void del(FILE *file, int &n, int elem)\n\
{\n\
   FILE *binput;\n\
   struct Data temp;\n\
   int k = 0;\n\
   fseek(file, 0L, SEEK_SET);\n\
   fopen_s(&binput, "binput222.dat", "w+b");\n\
   for (int i = 0; i < n; i++)\n\
   {\n\
      fread(&temp.day, sizeof(temp.day), 1, file);\n\
      fread(&temp.mes, sizeof(temp.mes), 1, file);\n\
      fread(&temp.god, sizeof(temp.god), 1, file);\n\
      printf_s("%d %s\n", temp.day, temp.mes);\n\
      if (temp.day != elem)\n\
      {\n\
         fwrite(&temp.day, sizeof(temp.day), 1, file);\n\
	fwrite(&temp.mes, sizeof(temp.mes), 1, file);\n\
	fwrite(&temp.god, sizeof(temp.god), 1, file);\n\
	k++;\n\
      }\n\
   }\n\
   fclose(file);\n\
   fclose(binput);\n\
   remove("binput.dat");\n\
   rename("binput222.dat", "binput.dat");\n\
   fopen_s(&file, "binput.dat", "r+b");\n\
   n = k;\n\
}\n';
break;
case "binfile_c_sort":
return 'void sort(FILE *filein, int &N)\n\
{\n\
   int i = 0, pos,j;\n\
   struct Man b;\n\
   struct Man a;\n\
   fseek(filein, 0, SEEK_SET);\n\
   while (i<((sizeof(a)+1)*(N - 1)))\n\
   {\n\
      //Читаем первую из сравниваемых записей\n\
      fseek(filein, i, SEEK_SET);\n\
      fread(&a.age, (sizeof(a.age)), 1, filein);\n\
      fseek(filein, ftell(filein) + 1, SEEK_SET);\n\
      fread(&a.name, (sizeof(a.age)), 1, filein);\n\
      printf_s("%d %s\n", a.age, a.name);\n\
      int j = i + sizeof(a.age) + sizeof(a.name) +1;\n\
      while (j < ((sizeof(a.age) + sizeof(a.name) + 1)*N))\n\
      {\n\
	//Читаем вторую из сравниваемых записей\n\
	fseek(filein, j, SEEK_SET);\n\
	fread(&b.age, (sizeof(b.age)), 1, filein);\n\
	fseek(filein, ftell(filein) + 1, SEEK_SET);\n\
	fread(&b.name, (sizeof(b.age)), 1, filein);\n\
	printf_s("%d %s\n", b.age, b.name);\n\
         //Если первая запись больше второй, то ...\n\
	if (a.age > b.age)	{\n\
   	   //ОБМЕН ЗАПИСЕЙ\n\
	   pos = i;	\n\
	   fseek(filein, pos, SEEK_SET);\n\
	   fwrite(&b.age, sizeof(b.age)+1, 1, filein);\n\
	   fwrite(&b.name, sizeof(b.name), 1, filein);\n\
	   pos = j;\n\
	   fseek(filein, pos, SEEK_SET);\n\
	   fwrite(&a.age, sizeof(a.age) + 1, 1, filein);\n\
	   fwrite(&a.name, sizeof(a.name), 1, filein);\n\
	   a.age = b.age;\n\
	   strncpy_s(a.name, b.name, strlen(a.name));\n\
	   printf_s("a!!! %d %s\n", a.age, a.name);\n\
	   printf_s("b!!! %d %s\n", b.age, b.name);\n\
	}\n\
	j += sizeof(a.age) + sizeof(a.name) + 1;\n\
      }\n\
      i += sizeof(a.age) + sizeof(a.name) + 1;\n\
   }\n\
}\n';
break;
//#endregion

//#region prolog
     case "list_prolog_sum":
     return "    sum([], 0).\n\
    sum([H | T], S) :-\n\
    sum(T, S1),\n\
    S = H + S1.\n"
     break;
     case "list_prolog_max":
     return "    max([X], X).\n\
     max([X, Y | T], Max) :-\n\
     X <= Y,\n\
     max([Y | T], Max).\n\
     max([X, Y | T], Max) :-\n\
     X > Y,\n\
     max([X | T], Max).\n"
     break;list_prolog_min
     case "list_prolog_min":
     return "    min([X], X).\n\
     min ([X, Y | T], Min) :-\n\
     X > Y,\n\
     min ([Y | T], Min).\n\
     min ([X, Y | T], Min) :-\n\
     X <= Y,\n\
     min ([X | T], Min).\n"
     break;
     case "list_prolog_del":
     return "    del([], _, []).\n\
     del([X | T], X, T1) :-\n\
     !,\n\
    del(T, X, T1).\n\
    del([H | T], X, [H | T1]) :-\n\
    X <> H,\n\
    del(T, X, T1).\n"
     break;
     case "list_prolog_kol":
     return "    kol([], 0).\n\
     kol([_ | T], K) :-\n\
     kol(T, K1),\n\
     K = K1 + 1.\n"
     break;
     case "list_prolog_sr":
     return "sra(X, Y, N) :-\n\
     N = X / Y.\n"
     break;
     case "list_prolog_sort":
     return "    gt(X, Y) :-\n\
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