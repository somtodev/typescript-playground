# Hello Typescript

## Commands

> tsc <file.ts>
Transpiles your typescript code to vanilla javascript


## TS Configuration

> tsc --init // Initialized your ts configuration file.

---

- **Target**: The version of javascript that the transpiler would convert to.

- **Module**: 


- **RootDir**: This specifies where your typescript files are located.

- **OutDir**: This specifies that could contain your compiled javascript files.

- **noEmitOnError**: Compilation of ts code to js would stop if an error is encountered.

- **SourceMap**: Source maps are excellent for debugging purposes and allow us to pinpoint the exact files and lines of code when working on a compiled, minified or product environment.

- **NoImplicitAny**: These would throw a compilation error when an implicitly declared variables is come acrossed.

- **NoImplicitReturns**: This would flag a compilation error when an implicit return is a possible outcome from a method.

- **NoUnusedLocals**: This enabled would throw a compilation error when you have an unused local variable.

- **NoUnusedParameters**: When enabled, this acts as a garbage collector and flags a compilation error when you have an unused parameter in a method.


## TS Debugging


## Types In Typescript

Typescript comes with several types like: 

>* Any
>* Unknown
>* Never
>* Tuple


## Advanced Types

- Types Alias
- Union Type
- Intersection Type


>* Any: If a variable is declared and not initialized that variable is given the type of any, meaning it can contain any type of variable which is against the concept of ts.


> **DRY**: Don't Repeat Yourself


> ***Reference***: [Mosh](https://www.youtube.com/@programmingwithmosh)
