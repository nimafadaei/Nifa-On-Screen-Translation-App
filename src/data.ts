import { AppScreen, Language } from './types';

export const LANGUAGES: Language[] = [
  { code: 'fa', name: 'فارسی (Persian)', direction: 'rtl' },
  { code: 'es', name: 'Español (Spanish)', direction: 'ltr' },
  { code: 'de', name: 'Deutsch (German)', direction: 'ltr' },
  { code: 'ja', name: '日本語 (Japanese)', direction: 'ltr' },
];

export const SIMULATED_APPS: AppScreen[] = [
  {
    id: 'chrome',
    name: 'Google Chrome',
    appName: 'Chrome Web',
    iconName: 'Globe',
    statusBarColor: 'bg-slate-800 text-slate-100',
    backgroundColor: 'bg-white text-slate-800',
    nodes: [
      {
        id: 'chrome-url',
        text: 'https://techworld.news/ai-revolution',
        type: 'input',
        bounds: { top: 6, left: 4, width: 92, height: 6 },
        translations: {
          fa: 'https://techworld.news/ai-revolution',
          es: 'https://techworld.news/ai-revolution',
          de: 'https://techworld.news/ai-revolution',
          ja: 'https://techworld.news/ai-revolution',
        },
      },
      {
        id: 'chrome-title',
        text: 'The Future of AI Assistants on Mobile Systems',
        type: 'title',
        bounds: { top: 16, left: 6, width: 88, height: 10 },
        translations: {
          fa: 'آینده دستیارهای هوش مصنوعی در سیستم‌های موبایل',
          es: 'El futuro de los asistentes de IA en sistemas móviles',
          de: 'Die Zukunft von KI-Assistenten auf mobilen Systemen',
          ja: 'モバイルシステムにおけるAIアシスタントの未来',
        },
      },
      {
        id: 'chrome-author',
        text: 'Published on July 9, 2026 by Dr. Elena Rostova',
        type: 'text',
        bounds: { top: 28, left: 6, width: 88, height: 4 },
        translations: {
          fa: 'منتشر شده در ۱۹ تیر ۱۴۰۵ توسط دکتر النا روستوا',
          es: 'Publicado el 9 de julio de 2026 por la Dra. Elena Rostova',
          de: 'Veröffentlicht am 9. Juli 2026 von Dr. Elena Rostova',
          ja: '2026年7月9日、エレナ・ロストワ博士によって公開',
        },
      },
      {
        id: 'chrome-para1',
        text: 'Artificial intelligence is changing how we interact with our smartphones. Soon, touch will be secondary to voice and intent.',
        type: 'text',
        bounds: { top: 34, left: 6, width: 88, height: 12 },
        translations: {
          fa: 'هوش مصنوعی در حال تغییر نحوه تعامل ما با تلفن‌های هوشمند است. به زودی، لمس کردن در درجه دوم پس از صدا و نیت قرار خواهد گرفت.',
          es: 'La inteligencia artificial está cambiando cómo interactuamos con nuestros teléfonos. Pronto, el tacto será secundario a la voz.',
          de: 'Künstliche Intelligenz verändert die Interaktion mit Smartphones. Bald wird Berührung der Stimme und Absicht untergeordnet sein.',
          ja: '人工知能はスマートフォンの操作方法を変えています。間もなく、タッチ操作は音声や意図に対して二次的なものになるでしょう。',
        },
      },
      {
        id: 'chrome-para2',
        text: 'Developers are struggling to build global translation tools that overlay cleanly. Existing layouts block screen gestures and disrupt reading flow.',
        type: 'text',
        bounds: { top: 48, left: 6, width: 88, height: 14 },
        translations: {
          fa: 'توسعه‌دهندگان در تلاش برای ساخت ابزارهای ترجمه جهانی هستند که به طور تمیز روی صفحه قرار می‌گیرند. طرح‌های موجود ژست‌های حرکتی صفحه را مسدود کرده و جریان مطالعه را مختل می‌کنند.',
          es: 'Los desarrolladores luchan por crear herramientas de traducción global limpias. Los diseños actuales bloquean gestos y lectura.',
          de: 'Entwickler tun sich schwer mit sauberen globalen Übersetzungstools. Bestehende Layouts blockieren Gesten und stören den Lesefluss.',
          ja: '開発者は、きれいにオーバーレイするグローバル翻訳ツールの作成に苦戦しています。既存のレイアウトは画面ジェスチャをブロックし、読書の流れを妨げます。',
        },
      },
      {
        id: 'chrome-btn-share',
        text: 'Share Article',
        type: 'button',
        bounds: { top: 65, left: 6, width: 40, height: 6 },
        translations: {
          fa: 'اشتراک‌گذاری مقاله',
          es: 'Compartir artículo',
          de: 'Artikel teilen',
          ja: '記事を共有',
        },
      },
      {
        id: 'chrome-btn-save',
        text: 'Save Bookmark',
        type: 'button',
        bounds: { top: 65, left: 54, width: 40, height: 6 },
        translations: {
          fa: 'ذخیره نشانک',
          es: 'Guardar marcador',
          de: 'Lesezeichen speichern',
          ja: 'ブックマークを保存',
        },
      },
      {
        id: 'chrome-related-head',
        text: 'Related News:',
        type: 'header',
        bounds: { top: 74, left: 6, width: 88, height: 4 },
        translations: {
          fa: 'اخبار مرتبط:',
          es: 'Noticias relacionadas:',
          de: 'Ähnliche Nachrichten:',
          ja: '関連ニュース：',
        },
      },
      {
        id: 'chrome-related-item',
        text: 'Accessibility Services in Android 14+ Explored',
        type: 'text',
        bounds: { top: 79, left: 6, width: 88, height: 8 },
        translations: {
          fa: 'بررسی خدمات دسترسی‌پذیری در اندروید ۱۴ به بالا',
          es: 'Servicios de accesibilidad explorados en Android 14+',
          de: 'Barrierefreiheitsdienste in Android 14+ im Detail',
          ja: 'Android 14以降のアクセシビリティサービスの探求',
        },
      },
    ],
  },
  {
    id: 'settings',
    name: 'Android Settings',
    appName: 'System Settings',
    iconName: 'Settings',
    statusBarColor: 'bg-[#12131a] text-slate-100',
    backgroundColor: 'bg-[#1c1d24] text-slate-100',
    nodes: [
      {
        id: 'settings-title',
        text: 'Accessibility',
        type: 'title',
        bounds: { top: 8, left: 6, width: 88, height: 8 },
        translations: {
          fa: 'قابلیت دسترسی (Accessibility)',
          es: 'Accesibilidad',
          de: 'Barrierefreiheit',
          ja: 'アクセシビリティ',
        },
      },
      {
        id: 'settings-sec1-title',
        text: 'Screen Translators',
        type: 'header',
        bounds: { top: 18, left: 6, width: 88, height: 4 },
        translations: {
          fa: 'مترجم‌های صفحه',
          es: 'Traductores de pantalla',
          de: 'Bildschirmübersetzer',
          ja: '画面翻訳ツール',
        },
      },
      {
        id: 'settings-service-title',
        text: 'Floating Screen Translator',
        type: 'text',
        bounds: { top: 24, left: 6, width: 60, height: 5 },
        translations: {
          fa: 'مترجم سیار و شناور صفحه',
          es: 'Traductor de pantalla flotante',
          de: 'Schwebender Bildschirmübersetzer',
          ja: 'フローティング画面翻訳機',
        },
      },
      {
        id: 'settings-service-status',
        text: 'ON / Active',
        type: 'button',
        bounds: { top: 24, left: 70, width: 24, height: 5 },
        translations: {
          fa: 'روشن / فعال',
          es: 'SÍ / Activo',
          de: 'AN / Aktiv',
          ja: 'オン / 有効',
        },
      },
      {
        id: 'settings-service-desc',
        text: 'Allows parsing current window layouts using Android Accessibility Service to automatically overlay interactive translations.',
        type: 'text',
        bounds: { top: 30, left: 6, width: 88, height: 10 },
        translations: {
          fa: 'امکان تجزیه چیدمان‌های پنجره فعلی با استفاده از سرویس دسترسی‌پذیری اندروید جهت قرار دادن خودکار ترجمه‌های تعاملی.',
          es: 'Permite analizar diseños de ventana usando el Servicio de accesibilidad para superponer traducciones interactivas.',
          de: 'Ermöglicht die Analyse aktueller Fensterlayouts über den Android-Barrierefreiheitsdienst für interaktive Übersetzungen.',
          ja: 'Androidアクセシビリティサービスを使用して現在のウィンドウレイアウトを解析し、インタラクティブな翻訳を自動的にオーバーレイします。',
        },
      },
      {
        id: 'settings-sec2-title',
        text: 'System Settings',
        type: 'header',
        bounds: { top: 43, left: 6, width: 88, height: 4 },
        translations: {
          fa: 'تنظیمات سیستم',
          es: 'Ajustes del sistema',
          de: 'Systemeinstellungen',
          ja: 'システム設定',
        },
      },
      {
        id: 'settings-item1-title',
        text: 'Gesture Navigation',
        type: 'text',
        bounds: { top: 49, left: 6, width: 88, height: 4 },
        translations: {
          fa: 'ناوبری با ژست‌های حرکتی',
          es: 'Navegación por gestos',
          de: 'Gestensteuerung',
          ja: 'ジェスチャーナビゲーション',
        },
      },
      {
        id: 'settings-item1-desc',
        text: 'Swipe from screen edge to go back. Swipe up from bottom to go home.',
        type: 'text',
        bounds: { top: 53, left: 6, width: 88, height: 8 },
        translations: {
          fa: 'برای بازگشت، از لبه صفحه بکشید. برای رفتن به خانه، از پایین به بالا بکشید.',
          es: 'Desliza desde el borde para volver. Desliza hacia arriba para ir al inicio.',
          de: 'Vom Bildschirmrand wischen, um zurückzugehen. Von unten nach oben wischen für Startbildschirm.',
          ja: '戻るには画面の端からスワイプします。ホーム画面に戻るには下から上にスワイプします。',
        },
      },
      {
        id: 'settings-item2-title',
        text: 'Display Over Other Apps',
        type: 'text',
        bounds: { top: 63, left: 6, width: 88, height: 4 },
        translations: {
          fa: 'نمایش روی سایر برنامه‌ها',
          es: 'Mostrar sobre otras aplicaciones',
          de: 'Über anderen Apps einblenden',
          ja: '他のアプリの上に重ねて表示',
        },
      },
      {
        id: 'settings-item2-desc',
        text: 'Permit this service to draw layouts over active applications.',
        type: 'text',
        bounds: { top: 67, left: 6, width: 88, height: 6 },
        translations: {
          fa: 'اجازه به این سرویس برای ترسیم طرح‌ها روی برنامه‌های فعال.',
          es: 'Permite que este servicio dibuje diseños sobre aplicaciones activas.',
          de: 'Diesen Dienst erlauben, Layouts über aktiven Apps anzuzeigen.',
          ja: 'このサービスに、アクティブなアプリケーションの上にレイアウトを描画することを許可します。',
        },
      },
      {
        id: 'settings-button-test',
        text: 'Reset Translation Settings',
        type: 'button',
        bounds: { top: 78, left: 10, width: 80, height: 7 },
        translations: {
          fa: 'بازنشانی تنظیمات ترجمه',
          es: 'Restablecer ajustes de traducción',
          de: 'Übersetzungseinstellungen zurücksetzen',
          ja: '翻訳設定をリセット',
        },
      },
    ],
  },
  {
    id: 'game',
    name: 'RPG Game HUD',
    appName: 'Epic Quest RPG',
    iconName: 'Gamepad2',
    statusBarColor: 'bg-black text-amber-500',
    backgroundColor: 'bg-[#0f1115] text-slate-300 border-2 border-amber-900',
    nodes: [
      {
        id: 'game-quest-title',
        text: 'QUEST: The Whispering Ruins',
        type: 'game-hud',
        bounds: { top: 8, left: 6, width: 88, height: 5 },
        translations: {
          fa: 'مأموریت: خرابه‌های زمزمه‌گر',
          es: 'MISIÓN: Las ruinas susurrantes',
          de: 'QUEST: Die flüsternden Ruinen',
          ja: 'クエスト：ささやきの廃墟',
        },
      },
      {
        id: 'game-objective',
        text: 'Objective: Defeat the ancient stone golem sleeping in the inner chamber.',
        type: 'text',
        bounds: { top: 15, left: 8, width: 84, height: 10 },
        translations: {
          fa: 'هدف: شکست دادن غول سنگی باستانی که در تالار داخلی خوابیده است.',
          es: 'Objetivo: Derrotar al gólem de piedra antiguo que duerme en la cámara interior.',
          de: 'Ziel: Besiege den uralten Steingolem, der in der inneren Kammer schläft.',
          ja: '目標：奥の間に眠る古代のストーンゴーレムを撃破する。',
        },
      },
      {
        id: 'game-dialogue-name',
        text: 'Eldrin the Sage:',
        type: 'header',
        bounds: { top: 38, left: 6, width: 88, height: 4 },
        translations: {
          fa: 'الدرین فرزانه:',
          es: 'Eldrin el sabio:',
          de: 'Eldrin der Weise:',
          ja: '賢者エルドリン：',
        },
      },
      {
        id: 'game-dialogue-text',
        text: '"Beware traveler! Touch not the crystalline core on its chest, for it feeds on elemental magic and will restore its health instantly."',
        type: 'text',
        bounds: { top: 43, left: 6, width: 88, height: 16 },
        translations: {
          fa: '«مسافر مراقب باش! به هسته بلورین روی سینه آن دست نزن، چرا که از جادوی عناصر تغذیه می‌کند و بلافاصله سلامتی خود را بازیابی خواهد کرد.»',
          es: '"¡Cuidado viajero! No toques el núcleo cristalino de su pecho, porque se alimenta de magia elemental y se curará al instante."',
          de: '"Vorsicht Reisender! Berühre nicht den kristallinen Kern auf seiner Brust, denn er nährt sich von Elementarmagie und heilt sich sofort."',
          ja: '「旅人よ、警戒せよ！胸のクリスタルコアに触れてはならぬ。それは元素魔法を吸収し、瞬時に体力を回復してしまうのだ。」',
        },
      },
      {
        id: 'game-action-1',
        text: 'Flee Battle',
        type: 'button',
        bounds: { top: 66, left: 6, width: 40, height: 8 },
        translations: {
          fa: 'فرار از نبرد',
          es: 'Huir de batalla',
          de: 'Fliehen',
          ja: '戦闘から逃げる',
        },
      },
      {
        id: 'game-action-2',
        text: 'Attack Core',
        type: 'button',
        bounds: { top: 66, left: 54, width: 40, height: 8 },
        translations: {
          fa: 'حمله به هسته',
          es: 'Atacar núcleo',
          de: 'Kern angreifen',
          ja: 'コアを攻撃',
        },
      },
      {
        id: 'game-stat-hp',
        text: 'HP: 1420 / 2500',
        type: 'game-hud',
        bounds: { top: 80, left: 6, width: 40, height: 6 },
        translations: {
          fa: 'جون: ۱۴۲۰ / ۲۵۰۰',
          es: 'HP: 1420 / 2500',
          de: 'HP: 1420 / 2500',
          ja: '体力：1420 / 2500',
        },
      },
      {
        id: 'game-stat-mp',
        text: 'MP: 450 / 450',
        type: 'game-hud',
        bounds: { top: 80, left: 54, width: 40, height: 6 },
        translations: {
          fa: 'مانا: ۴۵۰ / ۴۵۰',
          es: 'MP: 450 / 450',
          de: 'MP: 450 / 450',
          ja: '魔力：450 / 450',
        },
      },
    ],
  },
  {
    id: 'chat',
    name: 'Social Chat App',
    appName: 'PingChat',
    iconName: 'MessageSquare',
    statusBarColor: 'bg-emerald-900 text-slate-100',
    backgroundColor: 'bg-slate-900 text-slate-100',
    nodes: [
      {
        id: 'chat-contact',
        text: 'Alex (Tech Lead)',
        type: 'title',
        bounds: { top: 8, left: 6, width: 88, height: 6 },
        translations: {
          fa: 'الکس (سرپرست فنی)',
          es: 'Alex (Líder Técnico)',
          de: 'Alex (Tech Lead)',
          ja: 'アレックス（テックリード）',
        },
      },
      {
        id: 'chat-bubble-1',
        text: 'Hey! Did you finish writing the Android WindowManager implementation?',
        type: 'text',
        bounds: { top: 18, left: 6, width: 70, height: 11 },
        translations: {
          fa: 'سلام! نوشتن پیاده‌سازی WindowManager اندروید رو تموم کردی؟',
          es: '¡Hola! ¿Terminaste de escribir la implementación de WindowManager para Android?',
          de: 'Hey! Bist du mit der Android WindowManager-Implementierung fertig geworden?',
          ja: 'やあ！AndroidのWindowManagerの実装は書き終えた？',
        },
      },
      {
        id: 'chat-bubble-2',
        text: 'Yes, I set the layout params so it handles touch-through. It is really smooth now.',
        type: 'text',
        bounds: { top: 31, left: 24, width: 70, height: 11 },
        translations: {
          fa: 'آره، پارامترهای چیدمان رو طوری تنظیم کردم که لمس رو عبور می‌ده. الان واقعاً روان کار می‌کنه.',
          es: 'Sí, configuré los parámetros de diseño para que permita el paso de toques. Ahora es muy fluido.',
          de: 'Ja, ich habe die Layout-Parameter so eingestellt, dass Touch-Eingaben durchgelassen werden. Läuft jetzt super flüssig.',
          ja: 'うん、タッチ透過を処理するようにレイアウトパラメータを設定したよ。今はすごくスムーズ。',
        },
      },
      {
        id: 'chat-bubble-3',
        text: 'Awesome! But how do we display translations on top of third-party apps without blocking screen gestures?',
        type: 'text',
        bounds: { top: 44, left: 6, width: 70, height: 14 },
        translations: {
          fa: 'عالیه! اما چطور ترجمه‌ها رو روی برنامه‌های جانبی نشون بدیم بدون اینکه ژست‌های حرکتی صفحه رو مسدود کنه؟',
          es: '¡Genial! Pero ¿cómo mostramos traducciones sobre apps de terceros sin bloquear los gestos?',
          de: 'Klasse! Aber wie zeigen wir Übersetzungen über Drittanbieter-Apps an, ohne die Gestensteuerung zu blockieren?',
          ja: '素晴らしい！でも、画面ジェスチャをブロックせずに他社製アプリの上に翻訳を重ねて表示するにはどうすればいいんだろう？',
        },
      },
      {
        id: 'chat-bubble-4',
        text: 'Check the Sandbox panel on the right! I have written the exact window-touch-dispatching layouts and overlay strategies there.',
        type: 'text',
        bounds: { top: 60, left: 24, width: 70, height: 14 },
        translations: {
          fa: 'پنل سنباکس سمت راست رو ببین! دقیقاً ساختار توزیع لمس پنجره و استراتژی‌های اورلی رو اونجا نوشتم.',
          es: '¡Revisa el panel de Sandbox a la derecha! He escrito las técnicas exactas de despacho de toques allí.',
          de: 'Schau dir das Sandbox-Panel rechts an! Ich habe dort die genauen Touch-Verteilungs-Layouts und Overlay-Strategien aufgeschrieben.',
          ja: '右側のサンドボックスパネルをチェックしてみて！そこに正確なウィンドウタッチ配信レイアウトとオーバーレイ戦略を書いておいたよ。',
        },
      },
      {
        id: 'chat-input',
        text: 'Type a message in English...',
        type: 'input',
        bounds: { top: 80, left: 6, width: 88, height: 7 },
        translations: {
          fa: 'یک پیام به انگلیسی تایپ کنید...',
          es: 'Escribe un mensaje en inglés...',
          de: 'Schreibe eine Nachricht auf Englisch...',
          ja: '英語でメッセージを入力...',
        },
      },
    ],
  },
];

export const KOTLIN_CODES = {
  accessibility: `package com.translator.service

import android.accessibilityservice.AccessibilityService
import android.graphics.Rect
import android.view.accessibility.AccessibilityEvent
import android.view.accessibility.AccessibilityNodeInfo
import org.json.JSONArray
import org.json.JSONObject

/**
 * 1. Android Accessibility Service (سرویس دسترسی‌پذیری)
 * این سرویس کل درخت گره‌های نمایشی (View Tree) را پیمایش کرده، متن‌ها و مختصات دقیق آن‌ها را استخراج می‌کند.
 */
class ScreenTranslatorAccessibilityService : AccessibilityService() {

    override fun onAccessibilityEvent(event: AccessibilityEvent) {
        // رویدادهای سیستمی (می‌تواند برای عیب‌یابی یا ردیابی پنجره فعال استفاده شود)
    }

    override fun onInterrupt() {
        // خاموش شدن ناگهانی سرویس توسط کاربر
    }

    /**
     * متد اصلی برای اسکن و استخراج اطلاعات کل صفحه جاری
     * این متد از گره ریشه شروع کرده و اطلاعات گره‌ها را در قالب JSON برای پردازش ترجمه می‌سازد.
     */
    fun captureScreenTextAndBounds(): String {
        val rootNode = rootInActiveWindow ?: return "[]"
        val jsonArray = JSONArray()
        traverseNode(rootNode, jsonArray)
        rootNode.recycle()
        return jsonArray.toString()
    }

    private fun traverseNode(node: AccessibilityNodeInfo?, jsonArray: JSONArray) {
        if (node == null) return

        // فقط گره‌هایی که متن معتبر و قابل خواندن دارند را استخراج می‌کنیم
        val text = node.text?.toString()
        if (!text.isNullOrBlank()) {
            val bounds = Rect()
            node.getBoundsInScreen(bounds) // دریافت مختصات دقیق پیکسل روی صفحه گوشی

            val nodeJson = JSONObject().apply {
                put("id", node.hashCode().toString())
                put("text", text)
                put("className", node.className?.toString() ?: "")
                put("bounds", JSONObject().apply {
                    put("left", bounds.left)
                    put("top", bounds.top)
                    put("right", bounds.right)
                    put("bottom", bounds.bottom)
                    put("width", bounds.width())
                    put("height", bounds.height())
                })
            }
            jsonArray.put(nodeJson)
        }

        // پیمایش فرزندان گره (Traversal)
        for (i in 0 until node.childCount) {
            val child = node.getChild(i)
            traverseNode(child, jsonArray)
            child?.recycle()
        }
    }
}`,

  overlay: `package com.translator.service

import android.app.Service
import android.content.Context
import android.content.Intent
import android.graphics.PixelFormat
import android.os.IBinder
import android.view.Gravity
import android.view.LayoutInflater
import android.view.MotionEvent
import android.view.View
import android.view.WindowManager
import android.widget.ImageView
import com.translator.R
import kotlin.math.abs

/**
 * 2. Floating Overlay Controller (مدیریت دکمه سیار و شناور)
 * سرویسی برای نمایش دکمه سیار در هر نقطه از صفحه نمایش گوشی کاربر.
 * دکمه دارای رفتار کشیدن و رها کردن (Drag-and-Drop) و چسبیدن به لبه صفحه (Snap-to-Edge) است.
 */
class FloatingOverlayService : Service() {

    private lateinit var windowManager: WindowManager
    private lateinit var floatingButton: View
    private lateinit var layoutParams: WindowManager.LayoutParams

    override fun onBind(intent: Intent?): IBinder? = null

    override fun onCreate() {
        super.onCreate()
        windowManager = getSystemService(Context.WINDOW_SERVICE) as WindowManager

        // تعریف لایه‌ دکمه شناور
        floatingButton = LayoutInflater.from(this).inflate(R.layout.layout_floating_button, null)

        // پارامترهای نمایش در WindowManager برای قرار گرفتن روی همه برنامه‌ها
        layoutParams = WindowManager.LayoutParams(
            WindowManager.LayoutParams.WRAP_CONTENT,
            WindowManager.LayoutParams.WRAP_CONTENT,
            // پشتیبانی از اندرویدهای جدید (Oreo به بالا)
            WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY,
            // عدم فوکوس روی دکمه شناور تا کیبورد و دکمه‌های سیستمی همچنان در پشت کار کنند
            WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE or WindowManager.LayoutParams.FLAG_LAYOUT_IN_SCREEN,
            PixelFormat.TRANSLUCENT
        ).apply {
            gravity = Gravity.TOP or Gravity.START
            x = 100 // موقعیت شروع افقی
            y = 500 // موقعیت شروع عمودی
        }

        // پیاده‌سازی کشیدن دکمه سیار (Touch Listener)
        setupDragBehavior()

        // اضافه کردن نما به صفحه
        windowManager.addView(floatingButton, layoutParams)
    }

    private fun setupDragBehavior() {
        var initialX = 0
        var initialY = 0
        var initialTouchX = 0f
        var initialTouchY = 0f
        var isClick = true

        floatingButton.setOnTouchListener { view, event ->
            when (event.action) {
                MotionEvent.ACTION_DOWN -> {
                    initialX = layoutParams.x
                    initialY = layoutParams.y
                    initialTouchX = event.rawX
                    initialTouchY = event.rawY
                    isClick = true
                    // اعمال افکت نیمه‌شفاف در زمان جابجایی
                    floatingButton.alpha = 0.8f
                    true
                }
                MotionEvent.ACTION_MOVE -> {
                    val deltaX = (event.rawX - initialTouchX).toInt()
                    val deltaY = (event.rawY - initialTouchY).toInt()

                    // اگر میزان حرکت از حد آستانه بیشتر شد، دیگر کلیک محسوب نمی‌شود
                    if (abs(deltaX) > 10 || abs(deltaY) > 10) {
                        isClick = false
                    }

                    layoutParams.x = initialX + deltaX
                    layoutParams.y = initialY + deltaY
                    windowManager.updateViewLayout(floatingButton, layoutParams)
                    true
                }
                MotionEvent.ACTION_UP -> {
                    floatingButton.alpha = 1.0f // بازگشت شفافیت به حالت قبل
                    
                    if (isClick) {
                        // تحریک فرآیند اسکن صفحه و ترجمه متون
                        triggerScreenTranslation()
                    } else {
                        // چسبیدن خودکار دکمه شناور به نزدیک‌ترین لبه صفحه (Snap to Edge)
                        snapToNearestEdge()
                    }
                    true
                }
                else -> false
            }
        }
    }

    private fun snapToNearestEdge() {
        val displayMetrics = resources.displayMetrics
        val screenWidth = displayMetrics.widthPixels
        val middle = screenWidth / 2

        // تعیین اینکه دکمه به سمت چپ برود یا راست
        layoutParams.x = if (layoutParams.x + floatingButton.width / 2 < middle) {
            0 // چسبیدن به لبه چپ
        } else {
            screenWidth - floatingButton.width // چسبیدن به لبه راست
        }
        windowManager.updateViewLayout(floatingButton, layoutParams)
    }

    private fun triggerScreenTranslation() {
        // ایجاد ارتباط با سرویس دسترسی‌پذیری و نمایش لایه‌های ترجمه روی صفحه
        val intent = Intent("com.translator.ACTION_TRIGGER_TRANSLATE")
        sendBroadcast(intent)
    }

    override fun onDestroy() {
        super.onDestroy()
        if (::floatingButton.isInitialized) {
            windowManager.removeView(floatingButton)
        }
    }
}`,

  touchPassThrough: `package com.translator.ui

import android.content.Context
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Paint
import android.graphics.RectF
import android.util.AttributeSet
import android.view.MotionEvent
import android.widget.FrameLayout

/**
 * 3. Gesture Pass-through Overlay Layout (حل مشکل مسدود شدن ژست‌های حرکتی گوشی)
 * اصلی‌ترین دغدغه توسعه‌دهندگان: لایه ترجمه به صورت تمام‌صفحه روی برنامه‌ها قرار می‌گیرد، 
 * اما کاربر باید بتواند آزادانه زیر آن اسکرول کند، زوم کند یا بازی کند بدون اینکه لایه ترجمه مانع شود.
 * 
 * راه حل فنی:
 * تعریف یک ViewGroup سفارشی که رویدادهای لمسی (Touch Events) را تحلیل می‌کند.
 * اگر کاربر نقطه‌ای خارج از کادرهای فعال ترجمه (Active Translation Cards) را لمس کند،
 * رویداد لمس نادیده گرفته شده و مستقیماً به برنامه زیرین پاس داده می‌شود (onTouchEvent -> false).
 */
class TouchPassThroughLayout @JvmOverloads constructor(
    context: Context, attrs: AttributeSet? = null, defStyleAttr: Int = 0
) : FrameLayout(context, attrs, defStyleAttr) {

    // لیستی از مستطیل‌های فعال که حاوی ترجمه هستند و باید کلیک بخورند (مثلاً برای نمایش متن اصلی یا مخفی کردن)
    private val interactiveBoundsList = ArrayList<RectF>()

    fun setInteractiveRegions(regions: List<RectF>) {
        interactiveBoundsList.clear()
        interactiveBoundsList.addAll(regions)
        invalidate() // بازطراحی صفحه
    }

    /**
     * متد کلیدی توزیع رویدادهای لمس در اندروید
     * در این بخش تعیین می‌کنیم لمس کاربر به گره‌های این لایه برسد یا از آن عبور کند و به برنامه زیرین برسد.
     */
    override fun dispatchTouchEvent(ev: MotionEvent): Boolean {
        val x = ev.x
        val y = ev.y

        // بررسی اینکه آیا مختصات لمس کاربر درون یکی از کادرهای فعال ترجمه قرار دارد یا خیر
        val isInsideInteractiveCard = interactiveBoundsList.any { rect ->
            rect.contains(x, y)
        }

        if (!isInsideInteractiveCard) {
            // فرستادن سیگنال عبور لمس به سیستم عامل
            // با برگرداندن false در این بخش، تمام تاچ‌ها و ژست‌های کشیدن (Swipe) و اسکرول به برنامه پایینی می‌رسند
            return false
        }

        // اگر تاچ روی کارت ترجمه بود، روال عادی اجرا شود تا کلیک کارت کار کند
        return super.dispatchTouchEvent(ev)
    }
}`,

  uxGuide: `## راهنمای طراحی رابط کاربری ترجمه بدون مزاحمت (Anti-Obstructive Translation UX)

بزرگترین چالش در برنامه‌های مترجم صفحه، **«مزاحمت بصری و حرکتی»** است. وقتی ترجمه‌ها تمام کدهای بصری و تعاملی را می‌پوشانند، کاربر حس خفگی و قطع ارتباط با برنامه اصلی خود را پیدا می‌کند. در زیر ۳ راهکار طراحی آورده شده است که در این سورس شبیه‌سازی کرده‌ایم:

---

### ۱. الگوی کارت‌های شیشه‌ای تعاملی (Interactive Glass Cards)
*   **مشکل لایه سنتی:** نمایش کادرهای زرد یا سفید با فونت زمخت که روی بازی یا برنامه را کاملاً کور می‌کند.
*   **راهکار هوشمند:**
    *   دریافت رنگ پس‌زمینه گره اصلی از طریق اسکرین‌شات موقت یا تخمین رنگ گره در Accessibility Node.
    *   ساخت کارت‌های شیشه‌ای (Acrylic/Semi-Transparent) با لبه‌های گرد خفیف و فونت خوانا همرنگ با ساختار اصلی.
    *   **قابلیت Flip (چرخش):** با کلیک روی هر کارت، کارت به آرامی می‌چرخد و متن اصلی انگلیسی/زبان مبدا را برای لحظه‌ای نشان می‌دهد تا کاربر سردرگم نشود.

---

### ۲. الگوی پین‌های مینیمال (Micro-Pin Tooltips)
*   **مشکل:** در صفحات شلوغ (مانند تنظیمات یا منوهای چت) قرار دادن ترجمه در جا، کل ساختار گرافیکی را به هم می‌ریزد.
*   **راهکار هوشمند:**
    *   هیچ متنی مستقیماً تغییر نمی‌کند! فقط یک آیکون کوچک، مینیمال و نورانی (مثلاً یک نقطه بنفش یا پین زبان 🌐) در گوشه بالایی هر گره متنی ظاهر می‌شود.
    *   پین‌ها فضای ناچیزی اشغال می‌کنند و به هیچ وجه مانع خواندن متن اصلی یا کار با صفحه نمی‌شوند.
    *   هر زمان کاربر مایل بود، با لمس یا نگه‌داشتن روی پین، تولتیپ (Tooltip) ترجمه به صورت متحرک و شناور باز می‌شود.

---

### ۳. الگوی HUD حاشیه‌ای تاشو (Split Sidebar HUD)
*   **مشکل:** در صفحات بسیار شلوغ یا بازی‌های اکشن، قرار دادن هرگونه کارت روی صفحه بازی یا متن را نابود می‌کند.
*   **راهکار هوشمند:**
    *   ترجمه‌ها روی یک لایه حاشیه‌ای شفاف در سمت راست یا پایین صفحه چیده می‌شوند.
    *   این لایه به موازات و هم‌سطح با گره‌های اصلی حرکت می‌کند.
    *   کاربر با یک نگاه چپ و راست، رابطه ترجمه و متن را بدون شلوغی وسط صفحه درک می‌کند.
`,
};
