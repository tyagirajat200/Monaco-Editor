export const editor_lang = [
    // {
    //     "id": 819,
    //     "name": "JAVA OPENJDK 8",
    //     "displayName": "Java",
    //     "tagType": {
    //         "id": 53,
    //         "name": "TECHNOLOGY_ATTR",
    //         "displayName": "Technologies"
    //     },
    //     "imageUrl": "https://s3.amazonaws.com/codejudge-core/tag/default_bg.jpeg",
    //     "attributes": "{\"lsp\": true, \"mime\": \"text/x-java\", \"stub\": \"import java.util.*;\\n\\nclass Solution {\\n    \\n    public int solution(String s) {\\n        // write the solution here..\\n    }\\n}\\n\\nclass Main {\\n\\n    public static void main(String[] args) {\\n        Scanner myObj = new Scanner(System.in);\\n        String line = myObj.nextLine();\\n\\n        int ans = new Solution().solution(line);\\n        System.out.print(ans);\\n    }\\n}\", \"type\": \"JAVA\", \"module\": \"ace/mode/java\", \"monaco\": \"java\", \"version\": \"(OpenJDK 8)\", \"extension\": \"java\", \"version_v2\": \"(13.0.1)\", \"language_id\": \"27\", \"mossLanguage\": \"java\", \"stubLanguage\": \"java\", \"fileExtension\": \"java\", \"language_id_v2\": 62, \"judge_wall_time\": 25, \"isSonarSupported\": true, \"judge_extra_time\": 5, \"judge_time_limit\": 20, \"is_high_computing\": true, \"judge_stack_limit\": 256000, \"judge_memory_limit\": 512000, \"sonarPropertiesUrl\": \"https://codejudge-artifacts.s3.amazonaws.com/sonar/programming/java.sonar-project.properties\", \"isPlagiarismSupported\": true, \"skipBuildAtPreProcessStage\": false, \"isMultipleSonarRunCompatible\": true}"
    // },
    {
        "id": 820,
        "name": "CPP 7.2.0",
        "displayName": "C++",
        "tagType": {
            "id": 53,
            "name": "TECHNOLOGY_ATTR",
            "displayName": "Technologies"
        },
        "imageUrl": "https://s3.amazonaws.com/codejudge-core/tag/default_bg.jpeg",
        "attributes": "{\"lsp\": true, \"mime\": \"text/x-c++src\", \"stub\": \"#include <iostream>  \\nusing namespace std;  \\n  \\nint solution(string s) {  \\n    // write the solution here.. \\n}  \\n  \\nint main()  \\n{  \\n    string s;\\n    cin >> s;\\n    cout << solution(s);\\n}\", \"type\": \"CPP\", \"module\": \"ace/mode/csharp\", \"monaco\": \"cpp\", \"version\": \"(7.2.0)\", \"extension\": \"cpp\", \"version_v2\": \"(GCC 7.4.0)\", \"language_id\": \"10\", \"mossLanguage\": \"cc\", \"stubLanguage\": \"cpp\", \"fileExtension\": \"cpp\", \"language_id_v2\": 52, \"judge_wall_time\": 25, \"isSonarSupported\": true, \"judge_extra_time\": 5, \"judge_time_limit\": 20, \"is_high_computing\": true, \"judge_stack_limit\": 256000, \"judge_memory_limit\": 512000, \"sonarPropertiesUrl\": \"https://codejudge-artifacts.s3.amazonaws.com/sonar/programming/cpp.sonar-project.properties\", \"isPlagiarismSupported\": true, \"skipBuildAtPreProcessStage\": true, \"isMultipleSonarRunCompatible\": true}"
    },
    {
        "id": 821,
        "name": "PYTHON 3.6.0",
        "displayName": "Python",
        "tagType": {
            "id": 53,
            "name": "TECHNOLOGY_ATTR",
            "displayName": "Technologies"
        },
        "imageUrl": "https://s3.amazonaws.com/codejudge-core/tag/default_bg.jpeg",
        "attributes": "{\"lsp\": true, \"mime\": \"text/x-python\", \"stub\": \"class Solution:\\n    def solution(self,s):\\n        # write the solution here..      \\n      \\ndef main():\\n  line = input()\\n  ret = Solution().solution(line)\\n  print(ret)\\n\\nif __name__ == '__main__':\\n    main()\", \"type\": \"PYTHON\", \"module\": \"ace/mode/python\", \"monaco\": \"python\", \"version\": \"(3.6.0)\", \"extension\": \"py\", \"version_v2\": \"(3.8.1)\", \"language_id\": \"34\", \"mossLanguage\": \"python\", \"stubLanguage\": \"python\", \"fileExtension\": \"py\", \"language_id_v2\": 71, \"judge_wall_time\": 25, \"isSonarSupported\": true, \"judge_extra_time\": 5, \"judge_time_limit\": 20, \"is_high_computing\": true, \"judge_stack_limit\": 256000, \"judge_memory_limit\": 512000, \"sonarPropertiesUrl\": \"https://codejudge-artifacts.s3.amazonaws.com/sonar/programming/python.sonar-project.properties\", \"isPlagiarismSupported\": true, \"skipBuildAtPreProcessStage\": false, \"isMultipleSonarRunCompatible\": true}"
    },
    // {
    //     "id": 824,
    //     "name": "JAVASCRIPT NODEJS 8.5.0",
    //     "displayName": "JavaScript - NodeJs",
    //     "tagType": {
    //         "id": 53,
    //         "name": "TECHNOLOGY_ATTR",
    //         "displayName": "Technologies"
    //     },
    //     "imageUrl": "https://s3.amazonaws.com/codejudge-core/tag/default_bg.jpeg",
    //     "attributes": "{\"lsp\": true, \"mime\": \"text/javascript\", \"stub\": \"(function main() {\\n  const readline = require(\\\"readline\\\");\\n  const r1 = readline.createInterface({\\n    input: process.stdin,\\n    output: process.stdout,\\n  });\\n  \\n  var solution = function(s) {\\n    // write your solution here..\\n  };\\n \\n  var n, k;\\n  r1.on(\\\"line\\\", (input) => {\\n    n = input;\\n  }).on(\\\"close\\\", () => {\\n    console.log(solution(n));\\n  });\\n})();\\n\", \"type\": \"JAVASCRIPT\", \"module\": \"ace/mode/javascript\", \"monaco\": \"javascript\", \"version\": \"(8.5.0)\", \"extension\": \"js\", \"version_v2\": \"(12.14.0)\", \"language_id\": \"29\", \"mossLanguage\": \"javascript\", \"stubLanguage\": \"javascript\", \"fileExtension\": \"js\", \"language_id_v2\": 63, \"judge_wall_time\": 25, \"isSonarSupported\": true, \"judge_extra_time\": 5, \"judge_time_limit\": 20, \"is_high_computing\": true, \"judge_stack_limit\": 256000, \"judge_memory_limit\": 512000, \"sonarPropertiesUrl\": \"https://codejudge-artifacts.s3.amazonaws.com/sonar/programming/js.sonar-project.properties\", \"isPlagiarismSupported\": true, \"skipBuildAtPreProcessStage\": false, \"isMultipleSonarRunCompatible\": true}"
    // },
    // {
    //     "id": 4870,
    //     "name": "CSHARP MONO 6.6.0.161",
    //     "displayName": "C#",
    //     "tagType": {
    //         "id": 53,
    //         "name": "TECHNOLOGY_ATTR",
    //         "displayName": "Technologies"
    //     },
    //     "imageUrl": "https://s3.amazonaws.com/codejudge-core/tag/default_bg.jpeg",
    //     "attributes": "{\"lsp\": true, \"mime\": \"text/x-csharp\", \"stub\": \"using System;\\nusing System.Collections.Generic;\\n\\n\\npublic class Solution {\\n    public int solution(string s) { \\n       // write your solution here..\\n    }\\n}\\n\\npublic class Test {\\n  public static int Main() {\\n    string input = Console.ReadLine();\\n    Solution sol = new Solution();\\n\\n    int res = sol.solution(input);\\n    Console.WriteLine(res);\\n    return 0;\\n  }\\n}\", \"type\": \"CSHARP\", \"module\": \"ace/mode/csharp\", \"monaco\": \"csharp\", \"version\": \"\", \"extension\": \"cs\", \"version_v2\": \"(6.6.0.161)\", \"language_id\": \"\", \"mossLanguage\": \"csharp\", \"stubLanguage\": \"c#\", \"fileExtension\": \"cs\", \"language_id_v2\": 51, \"judge_wall_time\": 25, \"isSonarSupported\": false, \"judge_extra_time\": 5, \"judge_time_limit\": 20, \"is_high_computing\": true, \"judge_stack_limit\": 256000, \"judge_memory_limit\": 512000, \"sonarPropertiesUrl\": \"https://codejudge-artifacts.s3.amazonaws.com/sonar/programming/cs.sonar-project.properties\", \"isPlagiarismSupported\": true, \"skipBuildAtPreProcessStage\": false, \"isMultipleSonarRunCompatible\": false}"
    // },
    {
        "id": 5091,
        "name": "C GCC 8.3.0",
        "displayName": "C",
        "tagType": {
            "id": 53,
            "name": "TECHNOLOGY_ATTR",
            "displayName": "Technologies"
        },
        "imageUrl": "https://s3.amazonaws.com/codejudge-core/tag/default_bg.jpeg",
        "attributes": "{\"lsp\": true, \"mime\": \"text/x-csrc\", \"stub\": \"#include <assert.h>\\r\\n#include <ctype.h>\\r\\n#include <limits.h>\\r\\n#include <math.h>\\r\\n#include <stdbool.h>\\r\\n#include <stddef.h>\\r\\n#include <stdint.h>\\r\\n#include <stdio.h>\\r\\n#include <stdlib.h>\\r\\n#include <string.h>\\r\\n\\r\\nchar* readline();\\r\\nchar* ltrim(char*);\\r\\nchar* rtrim(char*);\\r\\n\\r\\nint parse_int(char*);\\r\\n\\r\\n/*\\r\\n * Complete the 'solution' function below.\\r\\n *\\r\\n * The function is expected to return an INTEGER.\\r\\n * The function accepts following parameters:\\r\\n *  1. STRING a\\r\\n */\\r\\nint solution(char* a) {\\r\\n   // Write your solution here.. \\r\\n}\\r\\n\\r\\n\\r\\nint main()\\r\\n{\\r\\n    char* a = ltrim(rtrim(readline()));\\r\\n\\r\\n    int result = solution(a);\\r\\n\\r\\n    printf(\\\"%d\\\", result);\\r\\n    \\r\\n    return 0;\\r\\n}\\r\\n\\r\\nchar* readline() {\\r\\n    size_t alloc_length = 1024;\\r\\n    size_t data_length = 0;\\r\\n\\r\\n    char* data = malloc(alloc_length);\\r\\n\\r\\n    while (true) {\\r\\n        char* cursor = data + data_length;\\r\\n        char* line = fgets(cursor, alloc_length - data_length, stdin);\\r\\n\\r\\n        if (!line) {\\r\\n            break;\\r\\n        }\\r\\n\\r\\n        data_length += strlen(cursor);\\r\\n\\r\\n        if (data_length < alloc_length - 1 || data[data_length - 1] == '\\\\n') {\\r\\n            break;\\r\\n        }\\r\\n\\r\\n        alloc_length <<= 1;\\r\\n\\r\\n        data = realloc(data, alloc_length);\\r\\n\\r\\n        if (!data) {\\r\\n            data = '\\\\0';\\r\\n\\r\\n            break;\\r\\n        }\\r\\n    }\\r\\n\\r\\n    if (data[data_length - 1] == '\\\\n') {\\r\\n        data[data_length - 1] = '\\\\0';\\r\\n\\r\\n        data = realloc(data, data_length);\\r\\n\\r\\n        if (!data) {\\r\\n            data = '\\\\0';\\r\\n        }\\r\\n    } else {\\r\\n        data = realloc(data, data_length + 1);\\r\\n\\r\\n        if (!data) {\\r\\n            data = '\\\\0';\\r\\n        } else {\\r\\n            data[data_length] = '\\\\0';\\r\\n        }\\r\\n    }\\r\\n\\r\\n    return data;\\r\\n}\\r\\n\\r\\nchar* ltrim(char* str) {\\r\\n    if (!str) {\\r\\n        return '\\\\0';\\r\\n    }\\r\\n\\r\\n    if (!*str) {\\r\\n        return str;\\r\\n    }\\r\\n\\r\\n    while (*str != '\\\\0' && isspace(*str)) {\\r\\n        str++;\\r\\n    }\\r\\n\\r\\n    return str;\\r\\n}\\r\\n\\r\\nchar* rtrim(char* str) {\\r\\n    if (!str) {\\r\\n        return '\\\\0';\\r\\n    }\\r\\n\\r\\n    if (!*str) {\\r\\n        return str;\\r\\n    }\\r\\n\\r\\n    char* end = str + strlen(str) - 1;\\r\\n\\r\\n    while (end >= str && isspace(*end)) {\\r\\n        end--;\\r\\n    }\\r\\n\\r\\n    *(end + 1) = '\\\\0';\\r\\n\\r\\n    return str;\\r\\n}\\r\\n\\r\\nint parse_int(char* str) {\\r\\n    char* endptr;\\r\\n    int value = strtol(str, &endptr, 10);\\r\\n\\r\\n    if (endptr == str || *endptr != '\\\\0') {\\r\\n        exit(EXIT_FAILURE);\\r\\n    }\\r\\n\\r\\n    return value;\\r\\n}\\r\\n\", \"type\": \"C\", \"module\": \"ace/mode/c_cpp\", \"monaco\": \"c\", \"version\": \"\", \"extension\": \"c\", \"version_v2\": \"(GCC 8.3.0)\", \"language_id\": \"\", \"mossLanguage\": \"c\", \"stubLanguage\": \"c\", \"fileExtension\": \"c\", \"language_id_v2\": 49, \"judge_wall_time\": 25, \"isSonarSupported\": true, \"judge_extra_time\": 5, \"judge_time_limit\": 20, \"is_high_computing\": true, \"judge_stack_limit\": 256000, \"judge_memory_limit\": 512000, \"sonarPropertiesUrl\": \"https://codejudge-artifacts.s3.amazonaws.com/sonar/programming/c.sonar-project.properties\", \"isPlagiarismSupported\": true, \"skipBuildAtPreProcessStage\": true, \"isMultipleSonarRunCompatible\": true}"
    },
    {
        "id": 5092,
        "name": "PHP 7.4.1",
        "displayName": "PHP",
        "tagType": {
            "id": 53,
            "name": "TECHNOLOGY_ATTR",
            "displayName": "Technologies"
        },
        "imageUrl": "https://s3.amazonaws.com/codejudge-core/tag/default_bg.jpeg",
        "attributes": "{\"lsp\": true, \"mime\": \"text/x-php\", \"stub\": \"<?php\\r\\n\\r\\n/*\\r\\n * Complete the 'solution' function below.\\r\\n *\\r\\n * The function is expected to return an INTEGER.\\r\\n * The function accepts following parameters:\\r\\n *  1. STRING a\\r\\n */\\r\\n\\r\\nfunction solution($a) {\\r\\n    // Write your solution here...\\r\\n}\\r\\n\\r\\n\\r\\n$a = trim(fgets(STDIN));\\r\\n\\r\\n$result = solution($a);\\r\\n\\r\\necho $result;\\r\\n?>\", \"type\": \"PHP\", \"module\": \"ace/mode/php\", \"monaco\": \"php\", \"version\": \"\", \"extension\": \"php\", \"version_v2\": \"(7.4.1)\", \"language_id\": \"\", \"mossLanguage\": \"php\", \"stubLanguage\": \"php\", \"fileExtension\": \"php\", \"language_id_v2\": 68, \"judge_wall_time\": 25, \"isSonarSupported\": true, \"judge_extra_time\": 5, \"judge_time_limit\": 20, \"is_high_computing\": true, \"judge_stack_limit\": 256000, \"judge_memory_limit\": 512000, \"sonarPropertiesUrl\": \"https://codejudge-artifacts.s3.amazonaws.com/sonar/programming/php.sonar-project.properties\", \"isPlagiarismSupported\": false, \"skipBuildAtPreProcessStage\": false, \"isMultipleSonarRunCompatible\": true}"
    },
    // {
    //     "id": 5093,
    //     "name": "Ruby 2.7.0",
    //     "displayName": "Ruby",
    //     "tagType": {
    //         "id": 53,
    //         "name": "TECHNOLOGY_ATTR",
    //         "displayName": "Technologies"
    //     },
    //     "imageUrl": "https://s3.amazonaws.com/codejudge-core/tag/default_bg.jpeg",
    //     "attributes": "{\"lsp\": true, \"mime\": \"text/x-ruby\", \"stub\": \"#!/bin/ruby\\r\\n\\r\\nrequire 'json'\\r\\nrequire 'stringio'\\r\\n\\r\\n#\\r\\n# Complete the 'solution' function below.\\r\\n#\\r\\n# The function is expected to return an INTEGER.\\r\\n# The function accepts following parameters:\\r\\n#  1. STRING a\\r\\n#\\r\\n\\r\\ndef solution(a)\\r\\n    # Write your solution here..\\r\\nend\\r\\n\\r\\n\\r\\na = gets.strip.to_i\\r\\n\\r\\nresult = solution a\\r\\n\\r\\nprint result\", \"type\": \"RUBY\", \"module\": \"ace/mode/ruby\", \"monaco\": \"ruby\", \"version\": \"\", \"extension\": \"rb\", \"version_v2\": \"(2.7.0)\", \"language_id\": \"\", \"mossLanguage\": \"ruby\", \"stubLanguage\": \"ruby\", \"fileExtension\": \"rb\", \"language_id_v2\": 72, \"judge_wall_time\": 25, \"isSonarSupported\": true, \"judge_extra_time\": 5, \"judge_time_limit\": 20, \"is_high_computing\": true, \"judge_stack_limit\": 256000, \"judge_memory_limit\": 512000, \"sonarPropertiesUrl\": \"https://codejudge-artifacts.s3.amazonaws.com/sonar/programming/ruby.sonar-project.properties\", \"isPlagiarismSupported\": true, \"skipBuildAtPreProcessStage\": false, \"isMultipleSonarRunCompatible\": true}"
    // },
    {
        "id": 5094,
        "name": "Scala 2.13.2",
        "displayName": "Scala",
        "tagType": {
            "id": 53,
            "name": "TECHNOLOGY_ATTR",
            "displayName": "Technologies"
        },
        "imageUrl": "https://s3.amazonaws.com/codejudge-core/tag/default_bg.jpeg",
        "attributes": "{\"lsp\": true, \"mime\": \"text/x-scala\", \"stub\": \"import java.io._\\r\\nimport java.math._\\r\\nimport java.security._\\r\\nimport java.text._\\r\\nimport java.util._\\r\\nimport java.util.concurrent._\\r\\nimport java.util.function._\\r\\nimport java.util.regex._\\r\\nimport java.util.stream._\\r\\nimport scala.collection.immutable._\\r\\nimport scala.collection.mutable._\\r\\nimport scala.collection.concurrent._\\r\\nimport scala.concurrent._\\r\\nimport scala.io._\\r\\nimport scala.math._\\r\\nimport scala.sys._\\r\\nimport scala.util.matching._\\r\\nimport scala.reflect._\\r\\n\\r\\nobject Result {\\r\\n\\r\\n    /*\\r\\n     * Complete the 'solution' function below.\\r\\n     *\\r\\n     * The function is expected to return an INTEGER.\\r\\n     * The function accepts following parameters:\\r\\n     *  1. STRING a\\r\\n     */\\r\\n\\r\\n    def solution(a: String): Int = {\\r\\n        // Write your solution here..\\r\\n    }\\r\\n\\r\\n}\\r\\n\\r\\nobject Main {\\r\\n    def main(args: Array[String]) {\\r\\n        val a = StdIn.readLine.trim\\r\\n\\r\\n        val result = Result.solution(a)\\r\\n\\r\\n        print(result)\\r\\n    }\\r\\n}\\r\\n\", \"type\": \"SCALA\", \"module\": \"ace/mode/scala\", \"monaco\": \"scala\", \"version\": \"\", \"extension\": \"scala\", \"version_v2\": \"(2.13.2)\", \"language_id\": \"\", \"mossLanguage\": \"scala\", \"stubLanguage\": \"scala\", \"fileExtension\": \"scala\", \"language_id_v2\": 81, \"judge_wall_time\": 25, \"isSonarSupported\": true, \"judge_extra_time\": 5, \"judge_time_limit\": 20, \"is_high_computing\": true, \"judge_stack_limit\": 256000, \"judge_memory_limit\": 512000, \"sonarPropertiesUrl\": \"https://codejudge-artifacts.s3.amazonaws.com/sonar/programming/scala.sonar-project.properties\", \"isPlagiarismSupported\": false, \"skipBuildAtPreProcessStage\": false, \"isMultipleSonarRunCompatible\": true}"
    },
    {
        "id": 5096,
        "name": "Go 1.13.5",
        "displayName": "Go",
        "tagType": {
            "id": 53,
            "name": "TECHNOLOGY_ATTR",
            "displayName": "Technologies"
        },
        "imageUrl": "https://s3.amazonaws.com/codejudge-core/tag/default_bg.jpeg",
        "attributes": "{\"lsp\": true, \"mime\": \"text/x-go\", \"stub\": \"package main\\r\\nimport \\\"fmt\\\"\\r\\n \\r\\n/*\\r\\n * Complete the 'solution' function below.\\r\\n *\\r\\n * The function is expected to return an INTEGER.\\r\\n * The function accepts STRING a as parameter.\\r\\n */\\r\\n\\r\\nfunc solution(a string) int32 {\\r\\n    // Write your code here..\\r\\n}\\r\\n\\r\\n\\r\\nfunc main() {\\r\\n\\tvar n string\\r\\n\\tfmt.Scanf(\\\"%s\\\",&n)\\r\\n\\t\\r\\n\\tresult := solution(n)\\r\\n\\r\\n\\tfmt.Printf(\\\"%d\\\", result)\\r\\n}\", \"type\": \"GO\", \"module\": \"ace/mode/golang\", \"monaco\": \"go\", \"version\": \"\", \"extension\": \"go\", \"version_v2\": \"(1.13.5)\", \"language_id\": \"\", \"mossLanguage\": \"go\", \"fileExtension\": \"go\", \"language_id_v2\": 60, \"judge_wall_time\": 25, \"isSonarSupported\": true, \"judge_extra_time\": 5, \"judge_time_limit\": 20, \"is_high_computing\": true, \"judge_stack_limit\": 256000, \"judge_memory_limit\": 512000, \"sonarPropertiesUrl\": \"https://codejudge-artifacts.s3.amazonaws.com/sonar/programming/go.sonar-project.properties\", \"isPlagiarismSupported\": false, \"skipBuildAtPreProcessStage\": false, \"isMultipleSonarRunCompatible\": true}"
    },
    {
        "id": 5097,
        "name": "Swift 5.2.3",
        "displayName": "Swift",
        "tagType": {
            "id": 53,
            "name": "TECHNOLOGY_ATTR",
            "displayName": "Technologies"
        },
        "imageUrl": "https://s3.amazonaws.com/codejudge-core/tag/default_bg.jpeg",
        "attributes": "{\"lsp\": true, \"mime\": \"text/x-swift\", \"stub\": \"import Foundation\\r\\n\\r\\n/*\\r\\n * Complete the 'solution' function below.\\r\\n *\\r\\n * The function is expected to return an INTEGER.\\r\\n * The function accepts STRING a as parameter.\\r\\n */\\r\\n\\r\\nfunc solution(a: String) -> Int {\\r\\n    // Write your code here\\r\\n}\\r\\n\\r\\nlet a = readLine()\\r\\nlet result = solution(a: a!)\\r\\nprint(result)\\r\\n\", \"type\": \"SWIFT\", \"module\": \"ace/mode/swift\", \"monaco\": \"swift\", \"version\": \"\", \"extension\": \"swift\", \"version_v2\": \"(5.2.3)\", \"language_id\": \"\", \"mossLanguage\": \"swift\", \"stubLanguage\": \"swift\", \"fileExtension\": \"swift\", \"language_id_v2\": 83, \"judge_wall_time\": 25, \"isSonarSupported\": true, \"judge_extra_time\": 5, \"judge_time_limit\": 20, \"is_high_computing\": true, \"judge_stack_limit\": 256000, \"judge_memory_limit\": 512000, \"sonarPropertiesUrl\": \"https://codejudge-artifacts.s3.amazonaws.com/sonar/programming/swift.sonar-project.properties\", \"isPlagiarismSupported\": false, \"skipBuildAtPreProcessStage\": false, \"isMultipleSonarRunCompatible\": true}"
    },
    // {
    //     "id": 5098,
    //     "name": "Bash 5.0.0",
    //     "displayName": "Bash",
    //     "tagType": {
    //         "id": 53,
    //         "name": "TECHNOLOGY_ATTR",
    //         "displayName": "Technologies"
    //     },
    //     "imageUrl": "https://s3.amazonaws.com/codejudge-core/tag/default_bg.jpeg",
    //     "attributes": "{\"lsp\": true, \"mime\": \"text/x-sh\", \"stub\": \"#!/bin/bash\\r\\n\\r\\n\", \"module\": \"ace/mode/sh\", \"monaco\": \"shell\", \"version\": \"\", \"extension\": \"sh\", \"version_v2\": \"(5.0.0)\", \"language_id\": \"\", \"mossLanguage\": \"sh\", \"fileExtension\": \"sh\", \"language_id_v2\": 46, \"judge_wall_time\": 25, \"judge_extra_time\": 5, \"judge_time_limit\": 20, \"is_high_computing\": true, \"judge_stack_limit\": 256000, \"judge_memory_limit\": 512000, \"isPlagiarismSupported\": false}"
    // },
    {
        "id": 5100,
        "name": "Kotlin 1.3.70",
        "displayName": "Kotlin",
        "tagType": {
            "id": 53,
            "name": "TECHNOLOGY_ATTR",
            "displayName": "Technologies"
        },
        "imageUrl": "https://s3.amazonaws.com/codejudge-core/tag/default_bg.jpeg",
        "attributes": "{\"lsp\": true, \"mime\": \"text/x-kotlin\", \"stub\": \"import java.io.*\\r\\nimport java.math.*\\r\\nimport java.security.*\\r\\nimport java.text.*\\r\\nimport java.util.*\\r\\nimport java.util.concurrent.*\\r\\nimport java.util.function.*\\r\\nimport java.util.regex.*\\r\\nimport java.util.stream.*\\r\\nimport kotlin.collections.*\\r\\nimport kotlin.comparisons.*\\r\\nimport kotlin.io.*\\r\\nimport kotlin.jvm.*\\r\\nimport kotlin.jvm.functions.*\\r\\nimport kotlin.jvm.internal.*\\r\\nimport kotlin.ranges.*\\r\\nimport kotlin.sequences.*\\r\\nimport kotlin.text.*\\r\\n\\r\\n/*\\r\\n * Complete the 'solution' function below.\\r\\n *\\r\\n * The function is expected to return an INTEGER.\\r\\n * The function accepts STRING a as parameter.\\r\\n */\\r\\n\\r\\nfun solution(a: String): Int {\\r\\n    // Write your solution here\\r\\n}\\r\\n\\r\\nfun main(args: Array<String>) {\\r\\n    val a = readLine()!!\\r\\n\\r\\n    val result = solution(a)\\r\\n\\r\\n    print(result)\\r\\n}\", \"type\": \"KOTLIN\", \"module\": \"ace/mode/kotlin\", \"monaco\": \"kotlin\", \"version\": \"\", \"extension\": \"kt\", \"version_v2\": \"(1.3.70)\", \"language_id\": \"\", \"mossLanguage\": \"kt\", \"stubLanguage\": \"kotlin\", \"fileExtension\": \"kt\", \"language_id_v2\": 78, \"judge_wall_time\": 25, \"isSonarSupported\": true, \"judge_extra_time\": 5, \"judge_time_limit\": 20, \"is_high_computing\": true, \"judge_stack_limit\": 256000, \"judge_memory_limit\": 512000, \"sonarPropertiesUrl\": \"https://codejudge-artifacts.s3.amazonaws.com/sonar/programming/kotlin.sonar-project.properties\", \"isPlagiarismSupported\": false, \"skipBuildAtPreProcessStage\": false, \"isMultipleSonarRunCompatible\": true}"
    },
    {
        "id": 5101,
        "name": "Perl 5.28.1",
        "displayName": "Perl",
        "tagType": {
            "id": 53,
            "name": "TECHNOLOGY_ATTR",
            "displayName": "Technologies"
        },
        "imageUrl": "https://s3.amazonaws.com/codejudge-core/tag/default_bg.jpeg",
        "attributes": "{\"lsp\": true, \"mime\": \"text/x-perl\", \"stub\": \"#!/usr/bin/perl\\r\\n\\r\\nuse strict;\\r\\nuse warnings;\\r\\n\\r\\n#\\r\\n# Complete the 'solution' function below.\\r\\n#\\r\\n# The function is expected to return an INTEGER.\\r\\n# The function accepts STRING a as parameter.\\r\\n#\\r\\n\\r\\nsub solution {\\r\\n    # Write your solution here..\\r\\n}\\r\\n\\r\\n\\r\\nmy $a = <STDIN>;\\r\\nchomp($a);\\r\\n\\r\\nmy $result = solution $a;\\r\\n\\r\\nprint \\\"$result\\\";\", \"type\": \"PERL\", \"module\": \"ace/mode/perl\", \"monaco\": \"perl\", \"version\": \"\", \"extension\": \"pl\", \"version_v2\": \"(5.28.1)\", \"language_id\": \"\", \"mossLanguage\": \"perl\", \"stubLanguage\": \"perl\", \"fileExtension\": \"pl\", \"language_id_v2\": 85, \"judge_wall_time\": 25, \"isSonarSupported\": false, \"judge_extra_time\": 5, \"judge_time_limit\": 20, \"is_high_computing\": true, \"judge_stack_limit\": 256000, \"judge_memory_limit\": 512000, \"sonarPropertiesUrl\": \"https://codejudge-artifacts.s3.amazonaws.com/sonar/programming/perl.sonar-project.properties\", \"isPlagiarismSupported\": true, \"skipBuildAtPreProcessStage\": false, \"isMultipleSonarRunCompatible\": true}"
    }
]