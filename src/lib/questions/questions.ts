import { Question } from "@/features/layout/QuestionViewer"
import {
  framerIntermediateQuestions,
  framerJuniorQuestions,
  framerSeniorQuestions,
} from "./framer"
import {
  playwrightIntermediateQuestions,
  playwrightJuniorQuestions,
  playwrightSeniorQuestions,
} from "./playwright"
import {
  reactIntermediateQuestions,
  reactJuniorQuestions,
  reactSeniorQuestions,
} from "./react"
import {
  reactHookFormIntermediateQuestions,
  reactHookFormJuniorQuestions,
  reactHookFormSeniorQuestions,
} from "./react-hook-form"
import {
  reactQueryIntermediateQuestions,
  reactQueryJuniorQuestions,
  reactQuerySeniorQuestions,
} from "./react-query"
import {
  reactRouterDomIntermediateQuestions,
  reactRouterDomJuniorQuestions,
  reactRouterDomSeniorQuestions,
} from "./react-router-dom"
import {
  shadcnUIIntermediateQuestions,
  shadcnUIJuniorQuestions,
  shadcnUISeniorQuestions,
} from "./shadcn-ui"
import {
  tailwindCSSIntermediateQuestions,
  tailwindCSSJuniorQuestions,
  tailwindCSSSeniorQuestions,
} from "./tailwind"
import {
  tsBeltIntermediateQuestions,
  tsBeltJuniorQuestions,
  tsBeltSeniorQuestions,
} from "./ts-belt"
import {
  typescriptIntermediateQuestions,
  typescriptJuniorQuestions,
  typescriptSeniorQuestions,
} from "./typescript"
import {
  vitestIntermediateQuestions,
  vitestJuniorQuestions,
  vitestSeniorQuestions,
} from "./vitest"
import {
  zodIntermediateQuestions,
  zodJuniorQuestions,
  zodSeniorQuestions,
} from "./zod"
import {
  zustandIntermediateQuestions,
  zustandJuniorQuestions,
  zustandSeniorQuestions,
} from "./zustand"

export const questionMap: Record<string, Question[]> = {
  react_junior: reactJuniorQuestions,
  react_intermediate: reactIntermediateQuestions,
  react_senior: reactSeniorQuestions,
  react_hook_form_junior: reactHookFormJuniorQuestions,
  react_hook_form_intermediate: reactHookFormIntermediateQuestions,
  react_hook_form_senior: reactHookFormSeniorQuestions,
  react_query_junior: reactQueryJuniorQuestions,
  react_query_intermediate: reactQueryIntermediateQuestions,
  react_query_senior: reactQuerySeniorQuestions,
  react_router_dom_junior: reactRouterDomJuniorQuestions,
  react_router_dom_intermediate: reactRouterDomIntermediateQuestions,
  react_router_dom_senior: reactRouterDomSeniorQuestions,
  shadcn_ui_junior: shadcnUIJuniorQuestions,
  shadcn_ui_intermediate: shadcnUIIntermediateQuestions,
  shadcn_ui_senior: shadcnUISeniorQuestions,
  tailwind_css_junior: tailwindCSSJuniorQuestions,
  tailwind_css_intermediate: tailwindCSSIntermediateQuestions,
  tailwind_css_senior: tailwindCSSSeniorQuestions,
  typescript_junior: typescriptJuniorQuestions,
  typescript_intermediate: typescriptIntermediateQuestions,
  typescript_senior: typescriptSeniorQuestions,
  vitest_junior: vitestJuniorQuestions,
  vitest_intermediate: vitestIntermediateQuestions,
  vitest_senior: vitestSeniorQuestions,
  framer_junior: framerJuniorQuestions,
  framer_intermediate: framerIntermediateQuestions,
  framer_senior: framerSeniorQuestions,
  playwright_junior: playwrightJuniorQuestions,
  playwright_intermediate: playwrightIntermediateQuestions,
  playwright_senior: playwrightSeniorQuestions,
  ts_belt_junior: tsBeltJuniorQuestions,
  ts_belt_intermediate: tsBeltIntermediateQuestions,
  ts_belt_senior: tsBeltSeniorQuestions,
  zod_junior: zodJuniorQuestions,
  zod_intermediate: zodIntermediateQuestions,
  zod_senior: zodSeniorQuestions,
  zustand_junior: zustandJuniorQuestions,
  zustand_intermediate: zustandIntermediateQuestions,
  zustand_senior: zustandSeniorQuestions,
}
