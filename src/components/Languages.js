const language = [
    {
      id: 45,
      name: "Assembly (NASM 2.14.02)",
      editorLanguage: "assembly",
    },
    {
      id: 46,
      name: "Bash (5.0.0)",
      editorLanguage: "bash",
    },
    {
      id: 47,
      name: "Basic (FBC 1.07.1)",
      editorLanguage: "basic",
    },
    {
      id: 75,
      name: "C (Clang 7.0.1)",
      editorLanguage: "c",
      boilerPlateCode:
        `#include <stdio.h>\n\n\tint main(){\n\t\tprintf("Welcome to CR editor");\n\t\treturn 0;\n}`
  
    },
    {
      id: 76,
      name: "C++ (Clang 7.0.1)",
      editorLanguage: "c++",
      boilerPlateCode:
        `#include <iostream>\nusing namespace std;\n\n\tint main(){\n\t\tcout << "Hello World!";\n\t\treturn 0;\n}`
    },
    {
      id: 48,
      name: "C (GCC 7.4.0)",
      editorLanguage: "c",
      boilerPlateCode:
        `#include <stdio.h>\n\n\tint main(){\n\t\tprintf("Welcome to CR editor");\n\t\treturn 0;\n}`
    },
    {
      id: 52,
      name: "C++ (GCC 7.4.0)",
      editorLanguage: "c++",
      boilerPlateCode:
        `#include <iostream>\nusing namespace std;\n\n\tint main(){\n\t\tcout << "Hello World!";\n\t\treturn 0;\n}`
  
    },
    {
      id: 49,
      name: "C (GCC 8.3.0)",
      editorLanguage: "c",
      boilerPlateCode:
        `#include <stdio.h>\n\n\tint main(){\n\t\tprintf("Welcome to CR editor");\n\t\treturn 0;\n}`
    },
    {
      id: 53,
      name: "C++ (GCC 8.3.0)",
      editorLanguage: "c++",
      boilerPlateCode:
        `#include <iostream>\nusing namespace std;\n\n\tint main(){\n\t\tcout << "Hello World!";\n\t\treturn 0;\n}`
  
    },
    {
      id: 50,
      name: "C (GCC 9.2.0)",
      editorLanguage: "c",
      boilerPlateCode:
        `#include <stdio.h>\n\n\tint main(){\n\t\tprintf("Welcome to CR editor");\n\t\treturn 0;\n}`
    },
    {
      id: 54,
      name: "C++ (GCC 9.2.0)",
      editorLanguage: "c++",
      boilerPlateCode:
        `#include <iostream>\nusing namespace std;\n\n\tint main(){\n\t\tcout << "Hello World!";\n\t\treturn 0;\n}`
  
    },
    {
      id: 86,
      name: "Clojure (1.10.1)",
      editorLanguage: "clojure",
    },
    {
      id: 51,
      name: "C# (Mono 6.6.0.161)",
      editorLanguage: "c#",
    },
    {
      id: 77,
      name: "COBOL (GnuCOBOL 2.2)",
      editorLanguage: "cobol",
    },
    {
      id: 55,
      name: "Common Lisp (SBCL 2.0.0)",
      editorLanguage: "common-lisp",
    },
    {
      id: 90,
      name: "Dart (2.19.2)",
      editorLanguage: "dart",
    },
    {
      id: 56,
      name: "D (DMD 2.089.1)",
      editorLanguage: "d",
    },
    {
      id: 57,
      name: "Elixir (1.9.4)",
      editorLanguage: "elixir",
    },
    {
      id: 58,
      name: "Erlang (OTP 22.2)",
      editorLanguage: "plaintext",
    },
    {
      id: 44,
      name: "Executable",
      editorLanguage: "plaintext",
    },
    {
      id: 87,
      name: "F# (.NET Core SDK 3.1.202)",
      editorLanguage: "f#",
    },
    {
      id: 59,
      name: "Fortran (GFortran 9.2.0)",
      editorLanguage: "fortran",
    },
    {
      id: 60,
      name: "Go (1.13.5)",
      editorLanguage: "go",
    },
    {
      id: 95,
      name: "Go (1.18.5)",
      editorLanguage: "go",
    },
    {
      id: 88,
      name: "Groovy (3.0.3)",
      editorLanguage: "groovy",
    },
    {
      id: 61,
      name: "Haskell (GHC 8.8.1)",
      editorLanguage: "haskell",
    },
    {
      id: 91,
      name: "Java (JDK 17.0.6)",
      editorLanguage: "java",
    },
    {
      id: 62,
      name: "Java (OpenJDK 13.0.1)",
      editorLanguage: "java",
    },
    {
      id: 63,
      name: "JavaScript (Node.js 12.14.0)",
      editorLanguage: "javascript",
    },
    {
      id: 93,
      name: "JavaScript (Node.js 18.15.0)",
      editorLanguage: "javascript",
    },
    {
      id: 78,
      name: "Kotlin (1.3.70)",
      editorLanguage: "kotlin",
    },
    {
      id: 64,
      name: "Lua (5.3.5)",
      editorLanguage: "lua",
    },
    {
      id: 89,
      name: "Multi-file program",
      editorLanguage: "typeScript",
    },
    {
      id: 79,
      name: "Objective-C (Clang 7.0.1)",
      editorLanguage: "objective-c",
    },
    {
      id: 65,
      name: "OCaml (4.09.0)",
      editorLanguage: "ocaml",
    },
    {
      id: 66,
      name: "Octave (5.1.0)",
      editorLanguage: "octave",
    },
    {
      id: 67,
      name: "Pascal (FPC 3.0.4)",
      editorLanguage: "pascal",
    },
    {
      id: 85,
      name: "Perl (5.28.1)",
      editorLanguage: "perl",
    },
    {
      id: 68,
      name: "PHP (7.4.1)",
      editorLanguage: "php",
    },
    {
      id: 43,
      name: "Plain Text",
      editorLanguage: "plaintext",
      boilerPlateCode: '//Welcome to CR editor")',
  
    },
    {
      id: 69,
      name: "Prolog (GNU Prolog 1.4.5)",
      editorLanguage: "prolog",
    },
    {
      id: 70,
      name: "Python (2.7.17)",
      editorLanguage: "python",
      boilerPlateCode: 'print("Welcome to CR editor")',
  
    },
    {
      id: 92,
      name: "Python (3.11.2)",
      editorLanguage: "python",
      boilerPlateCode: 'print("Welcome to CR editor")',
  
    },
    {
      id: 71,
      name: "Python (3.8.1)",
      editorLanguage: "python",
      boilerPlateCode: 'print("Welcome to CR editor")',
    },
    {
      id: 80,
      name: "R (4.0.0)",
      editorLanguage: "r",
    },
    {
      id: 72,
      name: "Ruby (2.7.0)",
      editorLanguage: "ruby",
    },
    {
      id: 73,
      name: "Rust (1.40.0)",
      editorLanguage: "rust",
    },
    {
      id: 81,
      name: "Scala (2.13.2)",
      editorLanguage: "scala",
    },
    {
      id: 82,
      name: "SQL (SQLite 3.27.2)",
      editorLanguage: "sql",
    },
    {
      id: 83,
      name: "Swift (5.2.3)",
      editorLanguage: "swift",
    },
    {
      id: 74,
      name: "TypeScript (3.7.4)",
      editorLanguage: "typeScript",
    },
    {
      id: 94,
      name: "TypeScript (5.0.3)",
      editorLanguage: "typeScript",
    },
    // {
    //   id: 84,
    //   name: "Visual Basic.Net (vbnc 0.0.0.5943)",
    //   editorLanguage: "typeScript",
    // },
  ];

export default language