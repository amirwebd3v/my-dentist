import {  useNuxtApp } from 'nuxt/app'
import type {HeaderSettings} from "~/utils/types";

export function useActiveSection(headerItems: HeaderSettings['headerItems'] | undefined) {
    const { $locally } = useNuxtApp()
    const router = useRouter()
    const activeSection = ref()

    const sectionState = computed(() => activeSection.value)

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    const updateActiveSection = (sectionId: string) => {
        activeSection.value = sectionId
        $locally.setItem('section', sectionId)
        updateUrl(sectionId)
    }

    const updateUrl = (sectionId: string) => {
        const url = sectionId === 'header'
            ? `${window.location.pathname}${window.location.search}`
            : `#${sectionId}`
        history.replaceState(history.state, '', url)
    }

    const createObserver = () => {
        return new IntersectionObserver((entries) => {
            const visibleSection = entries.find(entry => entry.isIntersecting)
            if (visibleSection) {
                updateActiveSection(visibleSection.target.id)
            }
        }, {
            threshold: 0.5,
        })
    }

    const observeElements = (observer: IntersectionObserver) => {
        if(headerItems) {
            const sectionIds = [...headerItems.map(item => item.key), 'header']
            sectionIds.forEach(id => {
                const element = document.getElementById(id)
                if (element) observer.observe(element)
            })
        }
    }

    onMounted(async () => {
        if (router.currentRoute.value.hash === '') {
            $locally.clearItem('section')
        } else {
            activeSection.value = $locally.getItem('section')
            scrollToSection(sectionState.value)
        }

        const observer = await createObserver()
        observeElements(observer)
    })

    return {
        activeSection,
    }
}