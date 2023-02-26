import { Form, Select } from 'antd'
import '../left-panel/left-panel.css'
import './filter-form.css'

const FilterForm = ({ onFiltersChanged }) => {

  const options = (start, count) => {
    return Array(count)
      .fill()
      .map((element, index) => {
        return {
          value: index + start,
          label: index + start
        }
      })
  }

  const onFiltersAccepted = (values) => {
    onFiltersChanged({
      lifeSpan: { min: values.minAge, max: values.maxAge },
      weight: { min: values.minWeight, max: values.maxWeight },
      height: { min: values.minHeight, max: values.maxHeight }
    })
  }

  return (
    <Form className='form' onFinish={ onFiltersAccepted }>
      <label>
        <b>Сортировать</b>
      </label>
      <Filter name='Age' label='возраст' options={ options(6, 11) } />
      <Filter name='Weight' label='вес' options={ options(2, 90) } />
      <Filter name='Height' label='рост' options={ options(20, 70) } />
      <button>Применить</button>
    </Form>
  )
}

const Filter = ({ name, label, options }) => {
  return (
    <div className='select-container'>
      <label>{ label } от</label>
      <Form.Item initialValue={ options[0].value } name={ 'min' + name } className='select'>
        <Select options={ options } />
      </Form.Item>
      <label>до</label>
      <Form.Item initialValue={ options[options.length - 1].value } name={ 'max' + name } className='select'>
        <Select options={ options } />
      </Form.Item>
    </div>
  )
}

export default FilterForm