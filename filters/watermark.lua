-- filters/watermark.lua

function Meta(meta)
  if meta.rascunho == true and meta.rascunho_text then
    quarto.doc.add_html_dependency({
      name = "watermark",
      version = "1.0.0",
      stylesheets = {"watermark.css"}
    })
    quarto.doc.include_text("after-body", string.format([[
      <div class="watermark">%s</div>
    ]], meta.rascunho_text))
  end
  return meta
end
