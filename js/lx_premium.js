const frequency_col_html = '<div class="flex items-center justify-between hover:text-text-primary dark:hover:text-dark-text-primary cursor-pointer"><span class="flex items-center focus:outline-none" id="fx-freq-button">Frequency<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="ml-1 h-[14px] w-[14px]"><path fill-rule="evenodd" d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z" clip-rule="evenodd"></path></svg></span><ul id="fx-freq-menu" class="hidden flex flex-col absolute top-[296px] z-dropdown rounded-lg p-2 overflow-auto focus:outline-none text-sm shadow-level2 dark:shadow-dark-level2 bg-overlay-3 dark:bg-dark-overlay-3 transform opacity-100 scale-100" aria-labelledby="headlessui-menu-button-:R1mald5t6:" id="headlessui-menu-items-:rbm:" role="menu" tabindex="0" data-headlessui-state="open"><li id="fx-freq-6m" class="fx-freq-li" role="menuitem" tabindex="0" data-headlessui-state="" style="border-radius:5px"><div class="cursor-pointer select-none relative h-8 py-1.5 px-2 whitespace-nowrap hover:bg-fill-4 dark:hover:bg-dark-fill-4 rounded text-label-2 dark:text-dark-label-2 hover:text-label-2 dark:hover:text-dark-label-2 flex items-center"><span class="">6 Months</span></li><li id="fx-freq-1y" class="fx-freq-li" role="menuitem" tabindex="1" data-headlessui-state="" style="border-radius:5px"><div class="cursor-pointer select-none relative h-8 py-1.5 px-2 whitespace-nowrap hover:bg-fill-4 dark:hover:bg-dark-fill-4 rounded text-label-2 dark:text-dark-label-2 hover:text-label-2 dark:hover:text-dark-label-2 flex items-center"><span class="">1 Years</span></li><li id="fx-freq-2y" class="fx-freq-li" role="menuitem" tabindex="2" data-headlessui-state="" style="border-radius:5px"><div class="cursor-pointer select-none relative h-8 py-1.5 px-2 whitespace-nowrap hover:bg-fill-4 dark:hover:bg-dark-fill-4 rounded text-label-2 dark:text-dark-label-2 hover:text-label-2 dark:hover:text-dark-label-2 flex items-center"><span class="">2 Years</span></li><li id="fx-freq-all" class="fx-freq-li" role="menuitem" tabindex="3" data-headlessui-state="" style="border-radius:5px"><div class="cursor-pointer select-none relative h-8 py-1.5 px-2 whitespace-nowrap hover:bg-fill-4 dark:hover:bg-dark-fill-4 rounded text-label-2 dark:text-dark-label-2 hover:text-label-2 dark:hover:text-dark-label-2 flex items-center"><span class="">All Time</span></li></ul></div>';

const prob_row_html = '<div role="row" style="display:flex;flex:1 0 auto;min-width:0" class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4" problem-id="4" is-premium="false"><div role="cell" style="box-sizing:border-box;flex:52 0 auto;min-width:0;width:52px" class="mx-2 flex items-center py-[11px]"><span class="fx-prob-solved-status"><svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-1hwpjif"><path d="M21.6004 12C21.6004 17.302 17.3023 21.6 12.0004 21.6C6.69846 21.6 2.40039 17.302 2.40039 12C2.40039 6.69809 6.69846 2.40002 12.0004 2.40002C13.5066 2.40002 14.9318 2.74689 16.2004 3.3651M19.8004 6.00002L11.4004 14.4L9.00039 12" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div><div role="cell" style="box-sizing:border-box;flex:260 0 auto;min-width:0;width:260px" class="mx-2 flex items-center py-[11px]"><div class="max-w-[302px] flex items-center overflow-hidden"><div class="overflow-hidden"><div class="flex items-center"><div class="truncate"><a href="/problems/median-of-two-sorted-arrays" class="h-5 hover:text-blue-s dark:hover:text-dark-blue-s fx-prob-ques">4. Median of Two Sorted Arrays</a></div></div></div></div></div><div role="cell" style="box-sizing:border-box;flex:54 0 auto;min-width:0;width:54px" class="mx-2 flex items-center py-[11px]"><a aria-label="solution" href="/problems/median-of-two-sorted-arrays/solution" class="truncate fx-prob-solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="text-blue dark:text-dark-blue h-5 w-5"><path d="M15.207 11.293a1 1 0 010 1.414l-3.5 3.5a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 14.086l2.793-2.793a1 1 0 011.414 0z"></path><path d="M4 5a3 3 0 013-3h7.039a3 3 0 012.342 1.126l2.962 3.701A3 3 0 0120 8.702V19a3 3 0 01-3 3H7a3 3 0 01-3-3V5zm3-1a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V9h-3a2 2 0 01-2-2V4H7zm8 .6V7h1.92L15 4.6z"></path></svg></a></div><div role="cell" style="box-sizing:border-box;flex:100 0 auto;min-width:0;width:100px" class="mx-2 flex items-center py-[11px]"><span class="fx-prob-acceptance">37.3%</span></div><div role="cell" style="box-sizing:border-box;flex:84 0 auto;min-width:0;width:84px" class="mx-2 flex items-center py-[11px]"><span class="text-pink dark:text-dark-pink fx-prob-difficulty">Hard</span></div><div role="cell" style="box-sizing:border-box;flex:84 0 auto;min-width:0;width:84px" class="mx-2 flex items-center py-[11px]"><div class="flex h-full w-full flex-row items-center"><span class="h-2 flex-1 rounded-l-lg bg-fill-3 dark:bg-dark-fill-3" title="94%" style="border-bottom-right-radius:.5rem;overflow:hidden;border-top-right-radius:.5rem"><div class="inner-progressbar fx-prob-frequency" style="background-color:#62c555;width:94.4146%;height:.5rem;border-radius:.5rem"></div></span></div></div></div>';

/*******   EDITORIAL PREMIUM    *******/

async function getQno(qslug) {
    try {
        const url = "https://leetcode.com/graphql";
        const data = {
            query: `query questionTitle($titleSlug: String!) {
                question(titleSlug: $titleSlug) {
                  questionId
                }
              }
            `,
            variables: {
                "titleSlug": qslug
            }
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let responseData = await response.json();
        if (responseData.errors) return 2;
        let qno = responseData.data.question.questionId;
        return qno;
    } catch (error) {
        console.error("Error fetching data:", qslug, error);
        return null;
    }
}

async function setSolution() {
    let editorial_lock_svg = document.querySelector('svg.h-16.text-brand-orange');
    if (!editorial_lock_svg) return;

    let editorial_area = editorial_lock_svg.parentElement.parentElement;

    // let editorial_area = document.querySelector('.backdrop-blur-sm.bg-blocker');
    if (editorial_area == null) return;
    editorial_area.innerHTML = "";

    let qno = await getQno(window.location.pathname.split("/")[2]);
    qno = parseInt(qno) + 1;

    let link = `https://sheets.googleapis.com/v4/spreadsheets/1ilv8yYAIcggzTkehjuB_dsRI4LUxjkTPZz4hsBKJvwo/values/Problem!L${qno}?key=AIzaSyDDAE3rf1fjLGKM0FUHQeTcsmS6fCQjtDs`

    fetch(link)
        .then(response => response.json())
        .then(data => {
            if (!data.values || !data.values[0]) return;
            editorial_area.innerHTML = data.values[0][0];
        }).catch(error => {
            console.error("Error fetching data:", error);
            editorial_area.innerHTML = "Something went wrong!";
        });
}

function editorial_premium() {
    if (!window.location.pathname.startsWith("/problems/")) return;

    let observer = new MutationObserver(setSolution);
    observer.observe(document.querySelector("#__next"), { childList: true, subtree: true });

    setSolution();
}

/**********   PROBLEMSET COMPANIES PREMIUM   **********/

let companyProblemRanges = null;
let companyProblems = {};
let lcProblemData = {};
let curr_company = null;

function fetchCompanyProbleRanges() {
    let link = "https://sheets.googleapis.com/v4/spreadsheets/1ilv8yYAIcggzTkehjuB_dsRI4LUxjkTPZz4hsBKJvwo/values/CompaniesProblem_Map!A:C?key=AIzaSyDDAE3rf1fjLGKM0FUHQeTcsmS6fCQjtDs";

    fetch(link)
        .then(response => response.json())
        .then(data => {
            if (!data.values || !data.values[0]) return;
            data.values.shift();
            companyProblemRanges = new Map();
            data.values.forEach((row) => {
                companyProblemRanges.set(row[0], [row[1], row[2]]);
            });
        }).catch(error => {
            console.error("Error fetching Company Problem Range", error);
        });
}

async function fetchCompanyProblems(company_name) {
    if (!companyProblemRanges) return;
    let range = companyProblemRanges.get(company_name);
    if (companyProblems[company_name]) return;
    let url = `https://sheets.googleapis.com/v4/spreadsheets/1ilv8yYAIcggzTkehjuB_dsRI4LUxjkTPZz4hsBKJvwo/values/CompaniesProblem!${range[0]}:${range[1]}?key=AIzaSyDDAE3rf1fjLGKM0FUHQeTcsmS6fCQjtDs`;

    await fetch(url).then(response => response.json())
        .then(data => {
            if (!data.values || !data.values[0]) return;
            data.values.shift();
            companyProblems[company_name] = data.values;
        }).catch(error => {
            console.error("Error fetching Company Problems", error);
        }
        );
}

function setLcProblemData(problem_slug) {

}


async function companyProblemData(company_name) {
    if (!companyProblems[company_name]) await fetchCompanyProblems(company_name);
    if (!companyProblems[company_name]) return;
    console.log(companyProblems[company_name]);
}

function setCompanyProblems(company_name) {
    if (!companyProblemRanges) return;
    companyProblemData(company_name);
}

function sidebar_companies() {
    let selected_color = "#fcbf62";

    document.querySelectorAll('.swiper-slide a.mb-4.mr-3').forEach((element) => {
        let company_name = element.getAttribute('href').split("/")[2];
        element.setAttribute('company-name', company_name);
        element.addEventListener('click', function () {
            if(curr_company) document.querySelector(`a[company-name="${curr_company}"] span`).style.background = "";
            if (curr_company == company_name) {
                curr_company = null;
                // TODO Unset company problems
            } else {
                curr_company = company_name;
                element.querySelector('span').style.background = selected_color;
                setCompanyProblems(company_name);
            }
        });
        element.removeAttribute('href');
    });
}

function problemset_companies_premium() {
    if (!window.location.pathname.startsWith("/problemset/all")) return;

    fetchCompanyProbleRanges();

    let frequency_col = document.querySelector('[role="columnheader"]:nth-of-type(6)');
    frequency_col.innerHTML = frequency_col_html
    let freq_button = document.querySelector("#fx-freq-button");
    let freq_menu = document.querySelector("#fx-freq-menu");
    let selected_color = "#dedede";

    function clickHandler(e) {
        if (e.target !== freq_button) {
            freq_menu.classList.add("hidden");
            const path = e.composedPath();
            const fxFreqLiElement = path.find((element) => element.classList && element.classList.contains("fx-freq-li"));
            if (fxFreqLiElement) {
                if (fxFreqLiElement.style.background == selected_color) {
                    alert(fxFreqLiElement.style.background)
                    fxFreqLiElement.style.background = "";
                } else {
                    freq_menu.querySelectorAll(".fx-freq-li").forEach((element) => {
                        element.style.background = "";
                    });
                    fxFreqLiElement.style.background = selected_color;
                }
            }
            document.removeEventListener("click", clickHandler);
        }
    }

    freq_button.addEventListener("click", function () {
        freq_menu.classList.toggle("hidden");
        document.addEventListener("click", clickHandler);
    });

    sidebar_companies();

}

function lx_premium() {
    console.log("lx_premium");
    editorial_premium();
    problemset_companies_premium();
}

lx_premium();